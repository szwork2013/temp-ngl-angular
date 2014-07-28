// --------------------------------------------------
// REBOOT FORMS - TEXTAREA
// --------------------------------------------------

angular.module('Forms')
	.directive('textbox', function() {
		return {

			restrict: 'E',
			replace: true,

			scope: {
				class        : '@?',
				id           : '@?',
				ngModel      : '=?',
				name         : '@',
				validation   : '=?'
			},

			link: function(scope, el, attrs) {

				el.ready(function() {
					// Should the textbox auto-expand?
					if (attrs.autosize == '') {
						var $textarea = $(el.find('textarea'));

						var $mirror = $('<div class="textarea-mirror"></div>');
						$textarea.after($mirror);
						
						// Style the mirror
						$mirror.css({
							'font-family' : $textarea.css('font-family'),
							'font-size'   : $textarea.css('font-size'),
							'line-height' : $textarea.css('line-height'),
							'padding'     : '10px',
							'width'       : el[0].clientWidth + 'px'
						});

						// Style the textarea
						$textarea.css({
							'overflow'   : 'hidden',
							'min-height' : '2em',
							'resize'     : 'vertical'
						});

						$textarea.on('keyup', function() {
							$mirror.html(String($textarea.val()).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />') + '.<br/>.');

							if ($textarea.height() != $mirror.height()) {
								$textarea.height($mirror.height());
							}
						});
					}
				});

				// Set focus styles for the wrapper
				el.find('textarea').on('focus blur', function(event) {
					el.toggleClass('focus', $(this).is(document.activeElement));
				});
			},

			templateUrl: '/modules/Forms/directives/textbox/view.html'
		}
	});
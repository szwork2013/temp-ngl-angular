// --------------------------------------------------
// REBOOT FORMS - TEXTAREA
// --------------------------------------------------

angular.module('Forms')
	.directive('textbox', function() {
		return {

			restrict: 'E',
			replace: true,
			transclude: true,

			scope: {
				class        : '@?',
				id           : '@?',
				ngModel      : '=?',
				name         : '@',
				validation   : '=?'
			},

			link: function(scope, el, attrs) {
				// Set focus styles for the wrapper
				el.find('textarea').on('focus blur', function(event) {
					el.toggleClass('focus', $(this).is(document.activeElement));
				});

				// Should the textbox auto-expand?
				if (attrs.autosize == '') {
					$textarea = $(el.find('textarea'));
					textarea  = $textarea[0];

					// Hide overflow on element
					$(el).css('padding', '10px');
					$textarea.addClass('autosize');

					var createMirror = function(textarea) {
						$(textarea).after('<div class="autogrow-textarea-mirror"></div>');
						return $(textarea).next('.autogrow-textarea-mirror')[0];
					}

					var sendContentToMirror = function (textarea) {
						mirror.innerHTML = String(textarea.value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br />') + '.<br/>.';

						if ($(textarea).height() != $(mirror).height())
							$(textarea).height($(mirror).height());
					}

					var growTextarea = function () {
						sendContentToMirror(textarea);
					}

					// Create a mirror
					var mirror = createMirror(textarea);
					
					// Style the mirror

					// Style the textarea
					textarea.style.overflow = "hidden";
					textarea.style.minHeight = textarea.rows + "em";

					// Bind the textarea's event
					textarea.onkeyup = growTextarea;

					// Fire the event for text already present
					sendContentToMirror(textarea);
				}
			},

			templateUrl: '/modules/Forms/directives/textbox/view.html'
		}
	});
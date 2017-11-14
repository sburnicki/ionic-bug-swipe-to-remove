Example code to show a swipe-to-remove animation.

Serves as an example for a regression bug: Animation is only possible if `item.moveSliding(x);` is executed in `setTimeout` as a workaround.

See ionic bug [#13413](https://github.com/ionic-team/ionic/issues/13413)

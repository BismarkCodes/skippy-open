# Skippy - Youtube Ads Skipper Chrome Extension

Skippy is chrome extension built using Javascript, Html, and Css.
With jsut a few lines of code, Skippy automatically skips Ads that pop-up while watching youtube videos.


<!-- show image on readme -->
![](https://github.com/bismarkokletey/skippy/blob/main/images/skippy%20capture.PNG?raw=true)

## Installation

To use Skippy, kindly download it from the [chrome web store](https://chrome.google.com/webstore).

## How it Works

Content Script

```javascript
# content script

// function to auto skip ads
function autoSkip() {
  // set interval to check for existence of "Skip now" button every 500ms i.e 0.5s or half a second
  setInterval(() => {
    //   get the skip button
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    //   if skip button exists
    if (skipButton.length > 0) {
      //   click the skip button
      skipButton[0].click();
    }
  }, 500);
}
```

Like most extensions, Skippy injects a content script file like the above into the youtube page.

Once injected, the content script listens for the existence of the `Skip now` button and clicks it whenever it is found.

This is done by using the `setInterval` function which executes the function every 500ms i.e 0.5s or half a second.

## Roadmap

We are currently working on improving the extension.

Some of the things we are working on include:

    * Skippy for other browsers like Firefox, Opera, Safari, etc.

    * Hide Ads on other websites like Amazon, Flipkart, etc.

## Releases

No releases yet.

## Packages

No packages yet.

## Contributing

Pull requests are welcome!

For major changes, please open an issue to discuss what you would like to change.

Test your changes before submitting them.

Kindly follow the [contributing guidelines](https://github.com/bismarkokletey/skippy/blob/main/CONTRIBUTING.md) to ensure your contribution is well-written.

## Contributors

We currently don't have any contributors.

Become a contributor by [opening a pull request](https://github.com/bismarkokletey/skippy/pulls) or [opening an issue](https://github.com/bismarkokletey/skippy/issues) on Github.

## Author

Hey, I'm Bismark Okletey. I'm a software developer and the creator of Skippy.

I look forward to acknowledging you for your contributions.

## License

Skippy is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

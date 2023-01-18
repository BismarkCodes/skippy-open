# Skippy - The Ultimate YouTube Ad Skipper

Skippy is an open-source browser extension that allows users to automatically skip ads on YouTube videos.

<!-- show image on readme -->

![logo](https://github.com/bismarkokletey/skippy/blob/main/images/skippy%20capture.PNG?raw=true)

## Problem

Watching videos on YouTube can be a great way to spend your free time, but sometimes the ads that play before, during, or after the video can be boring, irrelevant, or even offensive. Skippy was created to solve this problem by automatically skipping ads, making the video-watching experience smoother and more enjoyable.

## Features

1. Current

- Automatically skip ads on YouTube videos

2. Future

- Whitelist certain channels to keep ads on
- Manually skip ads
- Disable the ad skipper on specific videos

## Installation

- Clone or download the repository from GitHub.
- Open the Chrome browser and navigate to the extensions page (chrome://extensions/)
- Enable the "Developer mode" by clicking the toggle switch in the top right corner.
- Click on the "Load unpacked" button
- Navigate to the downloaded Skippy extension folder and select it.

Skippy will now be installed and will automatically skip ads on YouTube videos.

## Usage

- Open a YouTube video and the ad will be automatically skipped.

## Technologies Used

- JavaScript
- chrome.webRequest API

## How it Works

Core Script

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

autoSkip();
```

Like most extensions, Skippy injects a content script file like the above into the youtube page.

Once injected, the content script listens for the existence of the `Skip now` button and clicks it whenever it is found.

This is done by using the `setInterval` function which executes the `autoSkip()` function every 500ms i.e 0.5s or half a second.

## Roadmap

We are currently working on improving the extension.

Some of the things we are working on include:

    * Skippy for other browsers like Firefox, Opera, Safari, etc.

    * Hide Ads on other websites like Amazon, Flipkart, etc.

## Releases

Skippy v1.0.1

## Packages

No packages yet.

## Contributing

Contributing
We welcome contributions and pull requests from the community. If you would like to contribute, please follow these steps:

- Fork the repository and create a new branch for your changes
- Make your changes and test them thoroughly
- Submit a pull request, and we will review and merge your changes

Kindly follow the [contributing guidelines](https://github.com/BismarkCodes/skippy-open/blob/main/CONTRIBUTION.md) to ensure your contribution is well-written.

## Contributors

We currently don't have any contributors.

Become a contributor by [opening a pull request](https://github.com/bismarkokletey/skippy/pulls) or [opening an issue](https://github.com/bismarkokletey/skippy/issues) on Github.

## Author

Hey, I'm Bismark Okletey. I'm a software developer and the creator of Skippy.

I look forward to acknowledging you for your contributions.

## License

Skippy is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

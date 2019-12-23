const addSkip = () => {
  // 動画開始前のスキップボタンをクリック
  const skipButton = document.getElementsByClassName("ytp-ad-skip-button-container")[0]
  if (skipButton) skipButton.click();
  // 動画再生中のバナー広告の×ボタンをクリック
  const closeButton = document.getElementsByClassName("ytp-ad-overlay-close-container")[0]
  if (closeButton) closeButton.click();
}
setInterval(addSkip(), 1000)

function Test(title, testfns) {

  describe(title, () => {
    testfns.map(e => {
      test(e.title, e.test)
    });
  });

}

export { Test };
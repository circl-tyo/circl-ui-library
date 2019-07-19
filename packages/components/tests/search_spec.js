const search = require('../src/js/modules/search');

describe('Searchのテスト', function() {
  it('クリック時に状態が切り替わる', function() {
    document.body.innerHTML = __html__['tests/html/search/search_test.html'];
    search.call(this, document.body);

    const searchInput = document.getElementsByClassName('search__input')[0];
    
    searchInput.value = 'aaaa';
    console.log(searchInput.nextElementSibling.nextElementSibling.classList.contains('search__clear--hidden'));
    // expect(searchInput.nextElementSibling.nextElementSibling.getElementsByClassName('search__clear--hidden')).toBe('false');
  });

  // it('checkboxクラスがない場合は適用されない', function() {
  // });
});
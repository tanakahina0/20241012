// 既存のコード
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

// メニューアイコンのクリックイベント
menuIcon.addEventListener('click', function() {
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('active');
    // スクロールを無効にする
    if (menuList.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // スクロール無効
        document.body.style.position = 'fixed'; // スクロール位置を固定
        document.body.style.width = '100%'; // スクロールバーの影響を防ぐ
    } else {
        document.body.style.overflow = ''; // スクロール有効
        document.body.style.position = ''; // 元の位置に戻す
    }
});

// メニュー内の各リンクのクリックイベント
const menuLinks = document.querySelectorAll('.menu-list a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuList.classList.remove('active');
        menuIcon.classList.remove('active');
        // スクロール設定を元に戻す
        document.body.style.overflow = '';
        document.body.style.position = '';
    });
});
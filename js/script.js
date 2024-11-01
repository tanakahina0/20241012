const products = [
  { id: 1, name: 'Shining Dew | シャイニングデュー 導入美容液 30ml', price: 2900, popularity:3.8, image: './img/img001.jpg', isNew: true },
  { id: 2, name: 'Pure Mist | ピュアミスト 化粧水 150ml', price: 5200, popularity:5.0, image: './img/img002.jpg', isNew: false },
  { id: 3, name: 'Clear Veil | クリアヴェール 乳液 100ml', price: 4200, popularity:4.4, image: './img/img003.jpg', isNew: false },
  { id: 4, name: 'White Bloom | ホワイトブルーム 美容液 180ml', price: 7000, popularity:4.8, image: './img/img004.jpg', isNew: false },
  { id: 5, name: 'Floral Glow | フローラルグロウ 美容液 100ml', price: 4800, popularity:4.0, image: './img/img005.jpg', isNew: false },
  { id: 6, name: 'Essence Drop | エッセンスドロップ 化粧水 150ml', price: 5200, popularity:3.9, image: './img/img006.jpg', isNew: false },
  { id: 7, name: 'Silk Pure | シルクピュア 140ml 化粧水', price: 12000, popularity:4.6, image: './img/img009.jpg', isNew: false },
  { id: 8, name: 'Radiant Aqua | ラディアントアクア 導入美容液 80ml', price: 3400, popularity:4.3, image: './img/img008.jpg' },
  { id: 9, name: 'Crystal Wave | クリスタルウェーブ 乳液 150ml', price: 6400, popularity:4.9, image: './img/img007.jpg' , isNew: true },
  { id: 10, name: 'Velvet water touch | ヴェルベットウォータータッチ ローション 120ml', price: 4900, popularity:4.1, image: './img/img014.jpg', isNew: false },
  { id: 11, name: 'Lominous Silk Milk | ルミナスシルクミルク 乳液 200ml', price: 6100, popularity:4.3, image: './img/img013.jpg', isNew: false },
  { id: 12, name: 'Aqua Essence Mist | アクアエッセンスミスト 化粧水 180ml', price: 7000, popularity:5.0, image: './img/img015.png' , isNew: true },
];
// 商品リストを描画する関数
function displayProducts(products) {
  const product_list = document.getElementById('product-list');
  product_list.innerHTML = ''; // product-listの中身を空にする
  products.forEach(product => {
    const product_item = document.createElement('div');
    product_item.classList.add('product-item');
    product_item.innerHTML = `
      <div class="product-item__img">
        <a href="#">
          <img src="${product.image}" alt="${product.name}">
        </a>
      </div>
      <div class="product-txt">
        <h3 class="product-item__name">
          <a href="#">${product.name}</a>
        </h3>
        <p>${product.price.toLocaleString()}円</p>
      </div>
    `;
    product_list.appendChild(product_item);
  });
}

// 初期表示、または検索などをかけた際の商品の数の表示
function HowManyProducts(){
	const product_total = document.getElementsByClassName('product-item').length;
	document.getElementById('total-items').textContent = `全${product_total}件の製品`;
}

// 関数の実行
displayProducts(products);
HowManyProducts();

// 並び替えの処理 ...→スプレッド構文
document.getElementById('sort').addEventListener('change',function(e){
	const sort_value = e.target.value;
	let soreted_products = [...products];

	if(sort_value === 'price-asc'){
		soreted_products.sort((a,b) => a.price - b.price);
	} else if (sort_value === 'price-desc'){
		soreted_products.sort((a,b) => b.price - a.price);
	}
	displayProducts(soreted_products);
});

// 商品名でのフィルタリング処理
document.getElementById('search').addEventListener('input',function(e){
	const search_value = e.target.value.toLowerCase();
	const filtered_products = products.filter(product => 
		product.name.toLowerCase().includes(search_value)
	);
	displayProducts(filtered_products);
	HowManyProducts();
});

document.getElementById('sort').addEventListener('change', function(e) {
  const sort_value = e.target.value;
  let sorted_products = [...products];
  if (sort_value === 'price-asc') {
    sorted_products.sort((a, b) => a.price - b.price);
  } else if (sort_value === 'price-desc') {
    sorted_products.sort((a, b) => b.price - a.price);
  } else if (sort_value === 'popularity') {
    sorted_products.sort((a, b) => b.popularity - a.popularity); // 人気順で降順
  }
  displayProducts(sorted_products);
});

document.getElementById('sort').addEventListener('change', function(e) {
  const sort_value = e.target.value;
  let sorted_products = [...products];

  if (sort_value === 'price-asc') {
    sorted_products.sort((a, b) => a.price - b.price);
  } else if (sort_value === 'price-desc') {
    sorted_products.sort((a, b) => b.price - a.price);
  } else if (sort_value === 'popularity') {
    sorted_products.sort((a, b) => b.popularity - a.popularity);
  } else if (sort_value === 'new') {
    sorted_products = products.filter(product => product.isNew); // 新商品だけを抽出
  }
  displayProducts(sorted_products);
  HowManyProducts();
});

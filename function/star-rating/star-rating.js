<script>
        // 獲取所需元素物件
        var text = document.querySelector('textarea');
        var btn = document.querySelector('button');
        var ul = document.querySelector('ul');
        // 註冊事件
        btn.onclick = function () { // 給釋出按鈕繫結點選事件
            if (text.value == '') { // 判<i class="xCwKEja">www.cppcns.com</i>斷text.value是否為空，即用<i class="ESsCS"></i>戶是否有輸入內容
                alert('不能釋出空內容哦！');
          <i class="xCwKEja"></i>      return false;
            } else {    // 使用者有輸入內容則獲取到該內容賦值給建立的元素li進行顯示
                // 1.建立元素
                var li = document.createElement('li');
                li.innerHTML = text.value + "<a href='script:;' title='刪除該留言'>刪除</a>";  // 將使用者輸入的內容賦值給建立的li元素並且在後面新增一個a標籤用於後續刪除該留言
                // 2.新增元素
                // ul.appendChild(li);  // 這樣寫留言是追加到後面顯示的
                ul.insertBefore(li,ul.children[0]);    // 讓新增的留言在最上面顯示，即從下往上顯示的順序
                
                // 刪除元素：刪除的是當前a標籤所在的li節點也就是它的父元素
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick = function () {
                        // 需要刪除的li是a的父元素<i class="TDFxgOj"></i>即this.parentNode;
                        ul.removeChild(this.parentNode);    // 刪除ul裡的li節點，而li是當前a標籤的父節點，注意它們之間的關係
                    }
                }
            }
            text.value = '';    // 最後將留言輸入框中的內容清空方便再次留言
            
        }

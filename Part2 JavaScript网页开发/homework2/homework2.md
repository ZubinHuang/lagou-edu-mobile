#### 1. 使用函数方法书写一段程序，判断一个数是不是完美数。

如果一个数恰好等于它的因数之和，则称该数为“完美数”。

例如：第1个完全数是6，它有因数1、2、3、6，除去它本身6外，其余3个数相加，1+2+3=6。
```JS
    function fun(num){  
            var sum = 0;
            for(let j = 1; j< num; j++) {
                if ( num%j == 0){                    
                    sum +=j;
                    // console.log(j);
                } 
            }
            if( sum == num) {
                console.log(num+"是完美数");
            }
            else {
                 console.log(num+"不是完美数");
            }
    }

```
#### 2. 盈数是一种特殊的自然数，除去它本身以外的一切正约数的和大于它本身。与完美数类似。使用函数方法编写一段程序。输出1~100的所有盈数。
```JS
    function fun(num){  
            var sum = 0;
            for(let j = 1; j< num; j++) {
                if ( num%j == 0){                    
                    sum +=j;
                    // console.log(j);
                } 
            }
            if( sum > num) {
                console.log(num);
            }
    }
    fun(100)
```
#### 3. 用户输入一个整数n：求1! + 2! + 3! + 4! + …… + n!的和。叹号表示阶乘，如4! = 1 * 2 * 3 * 4
```JS
    function sumProduct(n){
        var sum = 0;
        for(let  j = n; j >= 1; j--){
           var sumPro = 1;
            for(let  i = 1; i <= j; i++){
            sumPro *= i;
            }
            sum += sumPro;
        }        
      return sum;
    }
     
```
#### 4. 求一个三位数，叫做“喇叭花数”，该三位数等与其每位数字的阶乘之和。输出100~999的所有喇叭花数。
```JS
      // 求喇叭花数
    function labaFun (n,m){
        for(var i = n; i <= m; i++){        
          var ge = i%10;
          var shi = parseInt((i/10))%10;
          var bai = parseInt((i/100))%10;
          var sum = sumProduct(ge)+sumProduct(shi)+sumProduct(bai);
          if (sum == i){
            console.log(i);
          }          
      }
    }      
    //求阶乘
    function sumProduct(n){   
        var sumPro = 1;
        for(let  i = 1; i <= n; i++){
        sumPro *= i;
        }               
      return sumPro;
    }
    labaFun(100,999);
```
#### 5. 如果整数A 的全部约数（包括1，不包括A 本身）之和等于B，且整数B 的全部约数。（包括1，不包括B 本身）之和等于A，则称整数A和B是一对亲密数。求2000 以内的全部亲密数。

```JS
    
```
#### 6. 验证哥德巴赫猜想。一个偶数可以拆分成两个质数之和。(质数：只有1和它本身)
```JS
        function isPrimeNumber(a) {
                for(var i = 2;i<a;i++)
                {
                    if(a%i==0) return false;
                }
                return true;
            }
        var n = parseInt(prompt("请输入一个偶数"));
        for(var i =2;i<=n/2;i++) {
            if(isPrimeNumber(i) && isPrimeNumber(n-i)) {
                console.log("偶数" + n + "可以拆分为质数和的形式" + i + " + " + (n-i));
            }
        }

```
####  7. 编写函数rev(char) 实现将字符串char倒置，比如rev("spring") 返回"gnirps"
```JS
    function rev(str) {
    return str.split("").reverse().join("");
    }
    rev("gnirps");
```
#### 8. 将字符串"i come from beijing"倒置，即控制台输出"beijing from come i",语句直接写在程序中，不需要用户输入
```js
    var str = "i come from beijing"
    var arr = str.split(` `).reverse().join(" ");   
    console.log(arr);
```
#### 9. 编写函数rightchange(char,n) 实现字符串char循环右移n位。比如rightchange("abcdefg",2) 返回"fgabcde"
```JS
    function shiftRight(str, n) {
    var len = str.length;
    // 因为是循环移动，所以需要处理移动位数大于字符串长度的情况
    n = n % len;

    return str.substring(len-2, len)+ str.substring(0, len-2);
    }
    var s= shiftRight('abcdefg', 2);
    console.log(s); // "cdefgab"

    //左移
    function shiftLeft(str, n) {
    var len = str.length;
    // 因为是循环移动，所以需要处理移动位数大于字符串长度的情况
    n = n % len;

    return str.substring(n, len) + str.substring(0, n);
    }

    var s= shiftLeft('abcdefg', 2);
    console.log(s); // "cdefgab"
```
#### 10. 编写函数maxr(char) 返回字符串char中最长的连续重复字母

比如maxr("mmmiijjjjkkkkkkssptr") 返回"kkkkkk"
```JS
    function maxr(charstr) {		
		var maxlength = 0;
		var maxchar = "";
        for(var i = 0,j = 1; i< charstr.length; j++){
            if(charstr.charAt(i) == charstr.charAt(j)) {
				
			}else {
				if(j-i > maxlength) {
					maxlength = j-i;
					maxchar  = charstr.charAt(i);
				}
				i = j;			
			}
        }
        return maxchar;
	}
    maxr("aabbbbccccdddddd");
```
#### 11. 有10个学生的成绩存在数组中，请统计大于等于平均成绩的人数。成绩直接以数组形式写在程序中，不需要用户输入。
```JS
    var grade = [89,67,45,56,78,88,57,46,90,80];
    function aveGrade(grade){
        var sum=0,num =0, sumAve = 0;
        for(let i = 0;i< grade.length;i++){
            sum += grade[i]
        }
        sumAve = sum/grade.length;
        for(let i = 0;i< grade.length;i++){
            if (grade[i] > sumAve){
                num ++ ;
            }
        }
        return num;
    }
    aveGrade(grade);
```

#### 12.  将"i love javascript very much"的每个单词的第一个字母，变为大写。
```JS
    // 先将字符串以空格的作为分隔符转换为数组，然后遍历数组，将数组里的字符串下标为0的字符改为大写字符，最后数组转成字符串
    function toUpper(str) {
		var arr = str.split(" ");
		for(var i=0;i<arr.length;i++)
		{
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
			str = arr.join(" ");	
		}
		return str;			
	}

```
#### 13.  求一组数中的最大值和最小值，以及所在位置的下标。
```JS
    function indexMaxMin(a){
        var max = Math.max(...a);
        var indexOfMax = a.indexOf(max);
        var min = Math.min(...a);
        var indexOfMin = a.indexOf(min);
        return {max,indexOfMax,min,indexOfMin};
    }
    
   let {max,indexOfMax,min,indexOfMin}= indexMaxMin([1,2,3,4,5,6,7,8,9]);
   console.log("最大值："+max,"最大值索引："+indexOfMax,"最小值："+min,"最小值索引："+indexOfMin);
```

#### 14.  将数组用 | 或其他符号连接成一个字符串。
```JS
    var str = [89,67,45,56,78,88,57,46,90,80];
    console.log(str.join("|"));
```

#### 15.  将数组中值为 0 的项去掉，将不为 0 的值存入一个新的数组，生成新的数组。
```JS
    var num = 0;
		var arr = [0, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
		
		function removeByvalue (arr,val) {
			for(var i = 0; i < arr.length; i ++) {
    			if(arr[i] == val) {
      				arr.splice(i,1);
      				i --;
    			}
  			}
		}
		removeByvalue (arr,0);
		console.log(arr);
```
#### 16.  数组去重；
```js
    function unique(arr){            
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
    return arr;
    }
    var arr = [1,1,1,2,2,3,4,5,6,3,4,2,4,1] ;
    console.log(unique(arr));
```
#### 17.  数组排序；
```JS
    var arr = [2,3,13,17,4,19,1];
    arr.sort(function(a,b){ // 这是比较函数
        return a - b;    // 降序
    })
    console.log(arr) // 结果：[19, 17, 13, 4, 3, 2, 1]
```
#### 18.  数组转对象；
``` JS
    var arr = ["李","李","设",NaN,"弟",NaN,"生","李"]; 
    function getRepeatNum(){ 
        var obj = {}; 
        for(var i= 0, l = arr.length; i< l; i++){ 
            var item = arr[i]; 
            obj[item] = (obj[item] +1 ) || 1; 
        } 
        return obj; 
    }
    console.log(getRepeatNum());
```
#### 19.  使用js将99乘法表输出在控制台
```JS
    for(var r=1;r<=9;r++){  //控制行数
            var chart="";
            for(var c=1;c<=r;c++){   //控制列数
                chart+=(`${c}*${r}=${c*r}\t`)
            }
            console.log(chart);
    }

```
#### 20. 买卖股票的最佳时机；给定一个数组，它的第i个元素是一支给定股票第i天的价格。如果你最多只允许完成一笔交易（即买入和卖出一支股票一次）设计一个算法来计算你所能获取的最大利润。
```

注意：你不能再买入股票前卖出股票

示例：

输入：[7, 1, 5, 3, 6, 4]

输出：5

解释：在第2天（当天股票价格等于1）的时候买入，在第五天（当天股票价格等于6）的时候卖出，最大利润为 6 - 1 = 5。

注意：利润不能使7 - 1 = 6，因为第二天的价格为1，第一天的价格为7，你是不可能在第二天买入股票然后等到第一天卖出的

```
```JS
    /*
        其实找到最大利润，其实无非就是找到历史最低价格，但事实上我们不知道哪个是最低价，没关系，我们可以先假设第一天是最低，遍历数组的同时，让当前价格与历史最低比较，如果更低，那自然要更新历史最低价了。

        更新了最低价之后呢？当然是用当前价格减去历史最低价求出利润，并与历史比较，始终记录较大的利润即可，直到遍历结束，返回最终的价格不就是最大的利润了，比如：
    */

   var maxProfit = function (prices) {
    let maxProfit = 0,
        // 假设0位价格为历史最低
        minPrice = prices[0];
    // i从1开始
    for (let i = 1; i < prices.length; i++) {
        // 如果后续价格比历史更低，更新最低价
        minPrice = Math.min(minPrice, prices[i]);
        // 计算利润，找出最大利润
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    };
    return maxProfit;
    };
```
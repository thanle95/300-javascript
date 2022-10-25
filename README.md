###### 1. What's the output?

```javascript
for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i);
    });
}
```


```javascript
for(var i = 0; i < 10; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        });
    })(i);
}
```
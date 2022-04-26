const timeoutFn = function(timeout){ 
	return new Promise(function(resolve){
		return setTimeout(resolve, timeout);
               });
}

async function fn(){
    await timeoutFn(1000);
    await timeoutFn(2000);
    return '完成';
}

fn().then(success => console.log(success));
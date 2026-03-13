function register(){

    const email = document.querySelector("input[type=email]").value;
    
    const password = document.querySelector("input[type=password]").value;
    
    localStorage.setItem("user",JSON.stringify({email,password}));
    
    alert("Đăng ký thành công");
    
    }
    
    
    function login(){
    
    const email = document.querySelector("input[type=text]").value;
    
    const password = document.querySelector("input[type=password]").value;
    
    const user = JSON.parse(localStorage.getItem("user"));
    
    if(user && user.email === email && user.password === password){
    
    alert("Đăng nhập thành công");
    
    window.location.href="index.html";
    
    }else{
    
    alert("Sai tài khoản hoặc mật khẩu");
    
    }
    
    }
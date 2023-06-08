const token = localStorage.getItem('token');

const Checking = () => {
    if(!token) return alert('Please login once' , window.location.href="../index.html");
};

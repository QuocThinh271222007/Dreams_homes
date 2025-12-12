auth.onAuthStateChanged(user => {
    const link = document.getElementById("login-link");

    if (user) {
        // Đã đăng nhập
        link.innerHTML = `<i class="fas fa-user me-1"></i> <span class="user-email">${user.email}</span>`;
        link.href = "#";

        // Tạo phần tử đăng xuất
        const logoutItem = document.createElement("li");
        logoutItem.className = "nav-item";
        logoutItem.innerHTML = `
            <a class="nav-link text-uppercase" href="#" id="logout-btn">
                <i class="fas fa-sign-out-alt me-1"></i> Đăng xuất
            </a>
        `;

        // Thêm vào danh sách navbar
        const navbarList = link.closest("ul.navbar-nav");
        navbarList.appendChild(logoutItem);

        // Gán sự kiện đăng xuất
        document.getElementById("logout-btn").onclick = () => {
            auth.signOut().then(() => {
                alert("Đã đăng xuất");
                location.reload();
            });
        };

    } else {
        // Chưa đăng nhập
        link.innerHTML = `<i class="fas fa-user me-1"></i> Đăng nhập`;
        link.href = "/login-main/index_login.html";
    }
});
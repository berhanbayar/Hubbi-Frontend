$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });
$(function () {
    $("yarrak").click(function () {
      var username, pass;
      username = $(" #username").val();
      pass = $("#pass").val();
      if (username == "") {
        alert("Kullanıcıadı Boş Bırakılamaz")
      } else if (pass == "") {
        alert("Şifre Boş Bırakılamaz")
      } else if (username == "123" && pass == "123") {
  
        $(location).prop('href', 'adminpaneli/index.html');
      } else if (username == "admin" && pass == "admin") {
  
        $(location).prop('href', 'index.html');
      } else {
        alert("Kullanıcı Adı veya şifrenizi hatalı girdiniz")
      }
  
    })
});
var posts=["2025/10/01/1.AlexNet/","2025/10/10/10.对比学习论文综述/","2025/10/12/12.Deepmind用机器学习指导数学直觉/","2025/10/11/11.AlphaFold 2/","2025/10/13/13.Swin Transformer/","2025/10/15/15.双流网络/","2025/10/14/14.CLIP/","2025/10/16/16.GPT，GPT-2，GPT-3/","2025/10/17/17.OpenAI Codex/","2025/10/18/18.DeepMind AlphaCode/","2025/10/19/19.斯坦福 2022 年 AI 指数报告精读/","2025/10/02/2.ResNet/","2025/10/20/20.I3D/","2025/10/21/21.视频理解论文串讲/","2025/10/03/3.Transformer/","2025/10/04/4.GNNGCN/","2025/10/05/5.GAN/","2025/10/06/6.BERT/","2025/10/07/7.ViT/","2025/10/08/8.MAE/","2025/10/09/9.MoCo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
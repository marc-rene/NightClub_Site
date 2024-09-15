
function Resize_With_Video()    // Get the height of the video and offset the text segment, the 'display: absolute' with the video caused alot of hassle 
{                               // and this function actually really helps with that! 
    var video_height =  document.getElementById('Home_Video').offsetHeight;
       

    document.getElementById('Text_segment').style.marginTop = (video_height.toString(10) + "px");
    console.log(video_height.toString(10) + "px");
}



var toggle_header = true;


function initMap() 
{
  const Starting_Long_Lat = { lat: 50, lng: 10 };

  const Europe_Bounds = 
  {
      north: 58,
      south: 36,
      west: 1060,
      east: 755,
  };


  const map = new google.maps.Map(document.getElementById("Map_Container"), 
      {
        zoom: 4,
        center: Starting_Long_Lat,
        disableDefaultUI: true,
      
        restriction: 
        {
            latLngBounds: Europe_Bounds,
            strictBounds: false,
        },

        mapTypeControl: false,

        styles:     // All gathered and edited from https://developers.google.com/maps/documentation/javascript/examples/style-array#maps_style_array-javascript
            [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#263c3f" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#38414e" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#212a37" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9ca5b3" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#746855" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#1f2835" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#f3d19c" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#2f3948" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
              ],
    }
  );

  var Club_title = 
    [
      "Space, Ibiza",
      "Cavo Paradiso, Mykonos",
      "Ministry of Sound, London",
      "The Warehouse Project, Manchester",
      "Shôko, Barcelona",
      "Berghain, Berlin",
      "Studio 338, London",       
      "Tenax, Florence",
      "Fabrik Madrid",
      "Air Amsterdam",
      "EPIC, Prague",
      "L'arc, Paris",
      "Level 27, Warsaw",
      "Klub 20/44, Belgrade",
      "Barbarellas Discoteque, Croatia",
      "YoYo, Paris",
  ];

  Media_objects =
    [
      [ 
        "<img src=\"https://www.white-ibiza.com/wp-content/uploads/2020/03/white-ibiza-clubs-hi-ibiza-2020-01.jpg\">",
        "<img src=\"https://themusicessentials.com/wp-content/uploads/2019/05/hi-ibiza-2019-events.jpg\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://www.hiibiza.com/assets/HI-IBIZA-VENUE-PROMO-18---NO-LOGO-LQ_2.mp4\" type=\"video/mp4\"> </video>",
        "<img src=\"https://media.resources.festicket.com/image/412x232/smart/filters:quality(70)/www/photos/HiIbiza2021_V1.jpg\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fDrcq4YLfkY?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wikipedia_space_ibiza%2803%29.jpg/800px-Wikipedia_space_ibiza%2803%29.jpg\">",
      ], //Space, Ibiza

      [ 
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Ovl1MAuHyFk?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPvbSOCOC7argq78mB4n2tl8c41gv5WJybesoeD=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOgiPrnQozxUQGj-vo0HI2SyfqmgrzMTz5amTbu=s1536\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPalcSpYDjb2aRjgbWzG8euWP6eNBo9h0nTPA1r=s1536\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/cpKVsS9cr6j7GDtygY3ikkZv11w4rpL-eHJrJHTi8XLZWQZ9pNdX-cFWzmgwzGdj2P1QJXe9aQ=m18?cpn=8AfJBYnb8VAWuS9M\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPNel3DNNPLgjOG2ezm1dmw26E60VG6XfZQQFQ7=s1024\">",
      ], //Cavo Paradiso, Mykonos

      [ 
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://www.ministryofsound.com/media/8078/homepage-opening-2021.mp4\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipNC2fItp3-QJZ_00xHmI6_ycG518rjO8SM9Xk3h=s1536\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/id9DW6xXYtU?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/MK9_rLnj70YeUBjfloQOYkS8AQEGHlvZR9T9Liz-7EOEwh6N8ThN4Zu1Bdn7I9AI893V9VdF7uA=m18?cpn=07l3LxRwrfalq0Yl\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMdhKEcW3atQfxy--CKv8nYFsMCthFCGiU54mqM=s1536\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipNjB4sE2qZmF-LGutONarnl4qI3jYCKgK7KiFvg=s1536\">",
      ], //Ministry of Sound, London

      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOlqAFNHJSsg-UEvXN095-5FI9XpsRJw7TWkSEU=s512\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipNybmH_JyOdJdIPzthA_YTzCWH0CKIt0vywfV5u=s1536\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipNHR6g4BgOebRRBbSitpzQc4yq5SHO5anS4e6_k=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMfC9TUy-0HmbIduCy7SoQ0wmlIcJfbSJ-JwbQ-=s1024\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/f3trkvb_IWs?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMxOapMO2xw-bLcR_zOfrKH_txYtF_Kaml-_-Wx=s1024\">",         
      ], //The Warehouse Project, Manchester

      [ 
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/PZinv90FuqU?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qUwHfjQZZC8?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPtAFCXom_q6cQUHU6pmVHkByiLSmTUzdSj85t9=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/pbe3tPLMiOR0LUECBchpc_TwSBQh19jbmY_y_RdZsWXsh1h3_E4gDXh_WNjRIOpaSmlbVxrzMA=m18?cpn=kp3wvEap0HMDIk4D\" type=\"video/mp4\"> </video>",
        "<img id=\"Media_item_width\" src=\"https://www.finestclubs.com/wfc_images/429/060/000/000/61d6aa06.jpg\">",
        "<img id=\"Media_item_width\" src=\"https://www.finestclubs.com/wfc_images/219/060/000/000/8809c27.jpg\">",     
      ], //Shôko, Barcelona
          
      [ 
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0buhM4bbAx4?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img id=\"Media_item_width\" src=\"https://external-preview.redd.it/b0PScNo1LaBKbwF91OjZCmOTO9MRkg6wxN9i9FT3amE.jpg?width=960&crop=smart&auto=webp&s=631754c505a5adf0d6a8156f36d92729aad0059b\">",
        "<img src=\"https://www.dontdiewondering.com/wp-content/uploads/2020/06/sven.png\">",
        "<img src=\"https://preview.redd.it/e3rs70wkjxx11.png?width=960&crop=smart&auto=webp&s=2b99841c46f85ab8952c021cf5c8cbd88f7e1883\">",
        "<img src=\"https://www.dontdiewondering.com/wp-content/uploads/2020/06/Berghain3.jpg\">",
        "<img src=\"https://www.dontdiewondering.com/wp-content/uploads/2020/06/berghain2-1024x640.jpg\">",
      ], //Berghain, Berlin
          
      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPHE0GbxMrGBqeJiy46mCPKR79R8RhfBv1qg_1h=s512\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipODY64sa2etosIi0jDfjhajOJgvic-6GD8lVEeE=s512\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOLMAufAFmHjpX6h2sH04JgBzIy0QDVPeiwXwm2=s512\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/EddvOOo756TUXaZuaEZeGooGF0iCrlS6Hub5JL0HM0dQ2qYBXVvmTr0bHU2pqvF_KF-iy_95Kw=m18?cpn=xWrw_WoelSEHpvj5\" type=\"video/mp4\"> </video>",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipOU7VhRk_DydoMe6lQ6LtXfQb8Xwpbjjsz3t1HI=s512\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uu88r2YAGLw?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      ], //Studio 338, London
          
      [ 
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SqYkk0nWIFw?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipMFUBkOtJdHOy7CShP_Xka6A4HxP5RCZB_pgp6N=s1536\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipMx7ViLagCl5yd4hPeQXEmkRwM8RiAp2T4cUH8U=s1536\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/HoFbcJWj7tU?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipPx_LNqYiAAhM9rgELerJnmEOCoo0swxbSs86Jx=s1536\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipPbyzqy_ogp0bMXJsHpyWZsgUHah7Dso4phQpkW=s1536\">",
      ], //Tenax, Florence
          
      [ 
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipOUgm1d_8IGCvza7-s9-r_qwhNdDi_1T6Vku1oI=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOk_8IzqqJjHZg6axIZAvRPWbGbszuUg-Y9IPZl=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/3DDEDeulLsOmqgv_CRPELDzwgMq7WlPTBZFZHSC2NNrsEhzaYX71EPGWjS5YaXEaJ5o5Z3_G=m18?cpn=yrU31OE7Fvpw6xZq\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipONNsQwd8mMiTJgLFtWyF_brKZ5KI-qagsqj2Qr=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/Y4mQLxOWFj7DezeBFLcoL7D74YqrP-IJ-PnSejCjC1T4mVDkc9AbZ1VubyZU_ERZCHcYLTExvA=m18?cpn=sQ_DmfBpJopb0xzg\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipNrvBKzi9WQ50_J7k0_X_suxCu9X6yrGMquyYPm=s1024\">",
      ], //Fabrik Madrid
          
      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOC_K8zP32TbOcPv6dWhrS6UNEZO0WuhsO626OZ=s1536\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMnzQd-FQhfbAojyqaa73UJ8f1vgpC814osyB3b=s1536\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPY6uVqg-0uNag3OoNWndqjiMePOfRWO-iK7fXN=s1536\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOQBR-G-vL7gpTnHrJw6F88jyxbaJq1BqjFu84e=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/tiRJDmKwlA2T7cH_MLy30nCmZzbsLTaXsKVdrAEe6foIaTaSwt3Sq6HSSD0nuwxOZIAzIfzO9co=m18?cpn=12d0BtIyHcwAKqPr\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipO81D3nA8d1QHQTlsWpb7GGFJCoqBggH0mBIejX=s1536\">",
      ], //Air Amsterdam
          
      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMdxnUO2g_qzdk58sD3_n3OaOMfeqZUjmcpRjw=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMI5IBv7IevQ300sSFX7G_JhgQtiYgW_nAuiWC0=s1024\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipMTzmeC2t8Fo8k963_Bp0xWHVrcobQZsmFjGiQG=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/dcDYf8BwZZRlKiunp_NCdALzEw8erEXv1de0PRSpGmTtdHdWVhMvP66KmVQd-cfHL4qig8kl=m18?cpn=SZJUlD_-bDFpeNon\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOqDoJ6QjK9-4iiyritmBZh8Qy1gJYBjiKk9rWL=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMom2MBhhss57XumFJXmYviLOhpb86BCon_ADIK=s1024\">",
      ], //EPIC, Prague
          
      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPYFJw6_SEK2cPLftNQzlbhF-bO6FtVAS8hZQUe=s1536\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"http://larc-paris.com/wp-content/uploads/2017/01/larc_web.mp4\" type=\"video/mp4\"> </video>",
        "<img src=\"http://larc-paris.com/wp-content/uploads/2019/11/LARC-PARIS-slide3.jpg\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/0MpjDUFLTHU?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img id=\"Media_item_width\" src=\"http://larc-paris.com/wp-content/uploads/2019/11/LARC-PARIS-slide1.jpg\">",
        "<img src=\"https://globeinfinite.com/wp-content/uploads/2020/07/larcbackground-1024x683-1.jpg\">",
      ], //L'arc, Paris
          
      [ 
        "<img src=\"https://level27.pl/wp-content/uploads/2019/04/Night-club-Warsaw.jpg\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipMjfUwRbx3wp21vm3u8paKx8qDVlQ0f8HodYRJs=s1536\">",
        "<img src=\"https://level27.pl/wp-content/uploads/2019/05/DSC9476-1024x683.jpg\">",
        "<img id=\"Media_item_width\" src=\"https://level27.pl/wp-content/uploads/2019/05/terrace-1-1-1024x683.jpg\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipMZUIuS8euRLp8AfL4OywMmXfW2x1EfOaRDdTnF=s1536\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/8TgFbnvfPHk?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      ], //Level 27, Warsaw
          
      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipN4nSkAFv3sGjDSTG721nbwmxnZx0J1_E_DoLxB=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/ih27_3wvRou_7VMoQMRFQzLBUG-icKpZ4ucg0njWVZM6UNdvccDBioTxE-absTpo9MmBe8RwsvU=m18?cpn=lsnVR4pB75sNfnWy\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipN-bNu6F7s3gepATdHsWBgnqx20l4Bje3ra87uf=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOpOqwern7lOLNT6XUyQ5Q873rd2tq6qxwYopTD=s1536\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipONQr1ny6C14CwH3GxM_w55hi0Oh4Mm2KXUkGeP=s1024\">",
        "<img id=\"Media_item_width\" src=\"https://lh3.ggpht.com/p/AF1QipNTY62Z8KPlGAc50UohfMprkJLlQFtz6o_Dpuat=s1536\">",
      ], //Klub 20/44, Belgrade
          
      [ 
        "<img src=\"https://defected.com/media/blog/cache/1920x/magefan_blog/20190810-001405-julienduvalphoto_2.jpg\">",
        "<img src=\"https://steemitimages.com/DQmdoFEEE4YSXsHjWknTcqvycXGhtFEF8PdYBjcdjWgXW5H/DSC_0143.JPG\">",
        "<img src=\"https://www.klikcup.com/images/objects/1855/beach-bar-barbarellas-4.jpg\">",
        "<img src=\"https://www.klikcup.com/images/objects/1855/beach-bar-barbarellas-7.jpg\">",
        "<img src=\"https://www.klikcup.com/images/objects/1855/beach-bar-barbarellas-8.jpg\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/m8TJC1_fxC8?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      ], //Barbarellas Discoteque, Croatia
          
      [ 
        "<img src=\"https://lh3.ggpht.com/p/AF1QipNpJGZwUwta5wi3Amga0ARF5QI2lw_TG1pvVkw=s1536\">",
        "<iframe id=\"Media_video\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CdG0vW8H7uo?autoplay=0&autoplay=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipNgfPGEKV13AO4X9rHVfIWHV3h29a1Jh6RS5rhA=s1024\">",
        "<video autoplay loop muted id=\"Media_video\"> <source src=\"https://lh3.googleusercontent.com/FOXazYOcmQ6-rc5vzqrDFOPBYmOeb0rtoUSTcMcqtFFi257nYUnAW2MwLHUfBswESoXF3XYWnSQ=m18?cpn=Z88XAyap7k36XFge\" type=\"video/mp4\"> </video>",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipPXkjFYd-5nQ1yWHwaS0B01zLGer1wvPIgtl1Yd=s1024\">",
        "<img src=\"https://lh3.ggpht.com/p/AF1QipOuQfxwhXCslN4B-k3FKIBRbNng5QLhKk9K0ezD=s1024\">",
      ], //YoYo, Paris
          
  ];
        
        
  var Club_Descriptions = 
    [
      "Ibiza is famous for its great nightlife and amazing clubs, but the best venue \
      (and consequently top of our list) is Space. Established in its current form 25 \
      years ago, it is legendary for its extremely long hours and open-air parties, with \
      airplanes roaring overhead. All of this and more makes Space the destination for \
      any clubber visiting the White Island.",
          
      "This seemingly deserted hill overlooking Paradise Beach on the Greek island of \
      Mykonos is the last place you’d expect to find a world-famous nightclub. In fact, \
      this open-air venue has taken advantage of the beautiful natural surroundings, making \
      the parties hosted here something truly special.",

      "Opened in 1991, it was supposed to be London’s version of the famous Paradise Garage in \
      New York. Today, it is one of the most recognizable names in the business, especially since \
      its great success led to the establishment of a global brand (which even includes its very \
      own record label).",


      "Unlike other nightclubs, The Warehouse Project is more of a seasonal thing, starting in September \
      and ending with a blast on New Year’s Day. On hiatus in 2014, it is expected to return in force in \
      2015 and once again show why it is regarded as one of the best clubs in Britain.",


      "Shoko is one of Barcelona's well-known club/restaurants. It sits proudly on the beach front, \
      sandwiched between other beach bars. It's been open for 5 years and has already made quite \
      an impression on Barcelona. It's popular amongst tourists and locals alike who are in search of \
      a glamorous setting to eat, drink and dance for the night.",

      "Founded in 2004 by 2 friends, Norbert Thormann and Michael Teufele, Berghain has since become one of \
      the world's most famous clubs, and is sometimes called the 'world capital of techno!'\
      In 1999 the 2 friends founded their first club, Ostgut, in a former railway repair depot, \
      But unlike Snax (Their first Club, which served a 'promiscuous' objective), Ostgut was open to \
      the general public but closed in 2003. Berghain opened in 2004 as a reincarnation of Ostgut, \
      and in 2016, a German court officially designated Berghain a cultural institution.. And in \
      October of this year, Berghain resumed indoor dance club events! SO MUCH more can be said \
      about here! From Sven the infamous bouncer, the super strict black dress-code, the rumours\
      as to what goes on in there, the entire community surrounding it, Berghain is much more than \
      a simple Nightclub! I highly recommend you go and give it some research!",


      "This Ibiza style night club, with their mind blowing events, concerts and parties being held almost every night of the week. \
      Having one of the largest terrace venues in town, as well as it's mega void sound system, Studio 338 has \
      become an extremely popular spot for music lovers from all over the world to visit. The club is known \
      to host a number of amazing events and gigs throughout the year. There are some pretty big names in music \
      who regularly visit the club to show off their talent. There's always something exciting or unusual going on at Studio 338.",


      "This is definitely the best underground venue for tech house lovers. You can stay for hours in this spacious black box of a club. \
      This place has seen gigs by everyone ranging from 80s new wave bands to world famous DJs, but it is ‘Nobody’s Perfect’ party that has \
      made Tenax one of Europe’s legendary club names. Those Saturday night parties have played host to practically every top DJ worth his salt over the last 20 years \
      Quality music from world famous DJs combined with epic lighting, visuals and sound you are guaranteed a fun night. \
      Tenax is a place where real Italians go. If you want to experience what nightlife is like for Italians, head there. Famous DJs spin here, \
      and it is dominantly all house music. It is not the same repetitive house music you will hear at other clubs. The songs usually have good \
      beats and you can dance to it.",

      "Fabrik Madrid is unique here as it's the only club whose outdoor terrace area has its very own river \
      The audio-visual impact given by Fabrik is just out of this world; something which you need to experience at least once when in Madrid\
      The location of the club makes it easy for the club goers to take full advantage of the extremely loud music system. You can get as loud \
      as you want, until as late in the night as you wish to, without disturbing anyone around you! The triple deck stage is large enough to fit \
      in all the eager dancers at Fabrik Club.",

      "Leave the day behind the second you step into Club AIR. For the remainder of the night, set the bar high and let your spirits soar. \
      With friendly, attentive service, creative, quality programming and a large space divided to create a cozier atmosphere, Club Air is \
      the perfect place to let your hair down and dance till dawn. Venuez even awarded Club AIR the 'Best Use of Technology of the Year,' \
      so the superb sound system will definitely get your feet moving.",


      "Epic is Prague’s most modern multi-genre music club, with focus a on electronic dance music \
      A world-class L-Acoustics K2 sound system, an area of 2 500 square metres, over 100 square metres \
      of P3,9 LED screens, and state-of-the-art lighting all provide for an incomparable acoustic and \
      visual experience, an experience which you will never forget! It's sadly closed at the moment \
      due to COVID-19, but is planned to be reopened once eveything gets back to normal.",

      "Located right at the base of the popular Arc de Triomphe, L’Arc Club has turned the Paris hip hop club scene around completely. \
      Not just a night club, but an elaborate arrangement of a bar, a supper club along with a VIP area, L’Arc Club is a breath taking \
      venue which brings all its customers to a standstill. With an extraordinary décor making the entire aura of the club look \
      extremely classy and fancy, instead of looking like a wild party as you would expect from a hip hop club, L’Arc has combined \
      the hip hop culture with elegance and beauty. ",

      "Level 27 is a stylish venue located on the 27th floor in the heart of Warsaw, Poland, offering social & cultural events\
      as well as dance and music performances. Whilst being a part of nightlife culture with a wide services offer, Level 27 club \
      takes great advantage of its location. The unique view of the city skyline will make the sunrises and sunsets remain in your\
      memory for a long time. Therefore, their slogan is “Higher level of clubbing”, which guarantees weekly events abounding in the \
      unforgettable music culture experience. Level 27 is something more than just another casual club in Warsaw. The club consists \
      of two zones: the central part with an area of 355 m2 and an open terrace with an area of 450 m2. The club has been designed \
      in a modern style with a gentle touch of copper, Edison bulbs and the natural moss that all together give our interior a very unique atmosphere.",

      "This popular Belgrade splav (raft) is located on the banks of the Sava river. Thankfully it works all year round, regardless \
      of the weather conditions. The raft offers a good music selection ranging from Detroit techno and soulful to disco, funky, house \
      and dub step. The atmosphere is always super sexy: red lights, a few screens and lots of smoke. In summer, the party is upstairs \
      and outside on the deck. '20/44 are Belgrade’s coordinates, but when you look up during the night at the magically lit up Branko’s \
      bridge, you can’t forget where you are.', This was a quote made by one of the Club-goers, and once you see some of the pictures of \
      it, it's not hard to see why they hold it in such high regard.",

      "Barbarellas Discoteque, or 'Barbs' as it’s affectionately known, was lovingly restored by Garden Festival founder Nick Colgan when he \
      discovered an old open-air club that’d fallen into disrepair. Harnessing the spirit of the early days of Ibiza, he turned the discoteque \
      into something of a festival staple, the official and sometimes unofficial after-party of the many events that now operate in The Garden, \
      a former holiday camp for the military-turned-Adriatic boat party paradise. Probably Croatia’s most famous and most infamous club, it’s \
      set among the pine trees by the sea and features a slammin’ Funktion-One system. Barbarellas has hosted events such as Love International, \
      Defected Croatia, Soundwave, Dekmantel Selectors and SuncéBeat, with the likes of DJ Harvey, Midland, Horse Meat Disco, Young Marco and \
      The Black Madonna set to hit the booth in the summer of 2019. When the music stops at The Garden, you can even take a speedboat across the\
      water to Barbs and dance the rest of the night away, right through till dawn and beyond. One for the party bucket list.",

      "YoYo is a new place of the Palais de Tokyo, an important contemporary art museum in the westside of Paris. Located in an old 'art déco' \
      cinema in the basement of the museum, this new space is used for many events like fashion shows, but also welcomes live music and \
      clubbing nights several times a month with high level artists, all with its capacity of 800 patrons. Yoyo has an edgy, raw-concrete \
      Berlin-style vibe, with the entrance to it literally being a black corridor decorated with graffiti by Lek, Sowat and other street artists.\
      Alongside a state-of-the-art sound system, a vast screen displaying supersize videos immerses visitors even more deeply into the party \
      atmosphere. Some of the worlds most-hyped DJs, including Digitalism and DJ Pone, come to spin beats at the Yoyo, which also holds\
      hip-hop and rock concerts. With such diversity means there are only club nights on certain weekends. So make sure to check the schedule\
      if you're ever nearby!",

  ];
    
  class NewMarker
    {
      constructor(Latitude, Longitude, description_index)
      {
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.description_index = description_index;

        const The_Club = new google.maps.Marker
        (
          {
              position: { lat: Latitude, lng: Longitude },
              map,
              title: Club_title[description_index],
          }
        );

        The_Club.addListener("click", () => 
          {
            document.getElementById('Pics_and_vids_container').style.position = "relative";
            document.getElementById('Pics_and_vids_container').style.visibility = "visible";

            var Media_Item_list = document.getElementsByClassName("Media_item");
              
            for (let index = 0; index < Media_Item_list.length; index++) 
            {
              Media_Item_list[index].innerHTML = Media_objects[description_index][index];
            }


            Change_Text("Nightclub_Description_Title", Club_title[description_index]);
            Change_Text("Nightclub_Description_Text", Club_Descriptions[description_index]);
            
            map.setZoom(10);

            map.setCenter(The_Club.getPosition());
          }
        );
      }
  }
    
  const NC0   =   new NewMarker(38.892736643251766,   1.407532826831921,    0);  //Space
  const NC2   =   new NewMarker(37.408778508147066,   25.3603050113195,     1);   //Cavo Paradiso
  const NC3   =   new NewMarker(51.49790743409029,    -0.09953411703186597, 2); //Ministry of Sound
  const NC4   =   new NewMarker(53.475902814876335,   -2.2282776455636846,  3); //The Warehouse Project
  const NC5   =   new NewMarker(41.38647074719195,    2.197063730691124,    4); //Shôko
  const NC6   =   new NewMarker(52.511500055243474,   13.4429945,           5); //Berghain
  const NC7   =   new NewMarker(51.495893818935194,   0.004485423272189067, 6); //Studio 338
  const NC8   =   new NewMarker(43.79958703711269,    11.195089869308879,   7); //Tenax
  const NC9   =   new NewMarker(40.265738620053135,   -3.840562101985009,   8); //Fabrik madrid
  const NC10  =   new NewMarker(52.366781633548825,   4.899367084654438,    9); //Club air
  const NC11  =   new NewMarker(50.09061790740315,    14.427728169308871,   10); //EPIC
  const NC12  =   new NewMarker(48.87439505627987,    2.2930180693088764,   11); //Larc paris
  const NC13  =   new NewMarker(52.22545507344496,    20.99116461164698,    12); //level27
  const NC14  =   new NewMarker(44.81817696185233,    20.44596330369422,    13); //klub 20-44
  const NC15  =   new NewMarker(43.83469147055663,    15.64057967301181,    14); //barbs
  const NC16  =   new NewMarker(48.8648302668775,     2.296608559522934,    15); //yoyo
}
    

function Switch_Page(divs_id_to_hide, div_id_to_show, Set_On_Home_to_True)
{
  
  //hide the first div
  
  toggle_header = Set_On_Home_to_True;

  show_header_visibility();

  document.getElementById(divs_id_to_hide).style.animation = 'fadeout ease 1s';

  //setTimeout(() => { document.getElementById(divs_id_to_hide).style.display = 'none';}, 600);
  document.getElementById(divs_id_to_hide).style.position = 'fixed';
  document.getElementById(divs_id_to_hide).style.visibility = 'hidden';
  document.getElementById(divs_id_to_hide).style.display = 'none';


  //now show the new one!
  Stop_All_Vids();

  document.getElementById(div_id_to_show).style.animation = 'fade_In ease 1s';

  document.getElementById(div_id_to_show).style.position = "static";
  document.getElementById(div_id_to_show).style.visibility = "visible";
  document.getElementById(div_id_to_show).style.display = "block";

  /*
  //switch the buttons
  console.log("AYO HERE NOW");
  console.log(document.getElementById(Header_Button2).style.display);
  if(Set_On_Home_to_True)
  { 
    document.getElementById(Header_Button2).style.display = "inline-flex";
    document.getElementById(Header_Button3).style.display = "none";
  }
  else
  {
    document.getElementById(Header_Button3).style.display = "inline-flex";
    document.getElementById(Header_Button2).style.display = "none";
  }*/
}


function Stop_All_Vids() 
{ 
  var Media_Item_list = document.getElementsByClassName("Media_item");

  for (let index = 0; index < Media_Item_list.length; index++) 
  {
    Media_Item_list[index].innerHTML = "";
  } 

}


function Change_Text(Div_id_to_change, Text_to_change_to)
{
  document.getElementById(Div_id_to_change).innerText = Text_to_change_to;
}


function show_header_visibility()
{
  document.getElementById("header").style.animation = 'fade_In ease 1s';
  //document.getElementById("header").style.marginTop = 'vh';
  document.getElementById("header").style.opacity = '1';
}


function ShowHeader() 
{ 
  if(toggle_header)
  {
    var video_height =  document.getElementById('Home_Video').offsetHeight;
    
    //else if ( (document.body.scrollTop > video_height || document.documentElement.scrollTop > video_height)  && (On_Home == true) )

    if (document.body.scrollTop > video_height || document.documentElement.scrollTop > video_height)
    {
      console.log("vid height is ", video_height);

      document.getElementById("header").style.animation = 'fade_In ease 1s';
      //document.getElementById("header").style.display = 'inline-block';
      document.getElementById("header").style.opacity = '1';
    } 
    
    //else if ( (document.getElementById("header").style.opacity == 0) && (On_Home == true) )
    
    else if (document.getElementById("header").style.opacity == 0)
    {
      console.log("Opacity is 0, it's not broken");
    }


    else
    {
      document.getElementById("header").style.animation = 'fadeout ease 0.4s';
      document.getElementById("header").style.opacity = '0';
      //setTimeout(() => {  document.getElementById("header").style.display = 'none'; }, 600);  //only run this after 0.4s cause JS ran all this in one go instantly 
    }
  }
  
}


function Close_Contact()
{
  document.getElementById("CONTACT_PARENT_DIV").style.display = "none";
  document.getElementById("REPORT_PARENT_DIV").style.opacity = "1";
  document.getElementById("EUROPEAN_NIGHT_SCENE_PARENT_DIV").style.opacity = "1";
}


function Show_Contact()
{
  document.getElementById("REPORT_PARENT_DIV").style.opacity = "0.2";
  document.getElementById("EUROPEAN_NIGHT_SCENE_PARENT_DIV").style.opacity = "0.2";
  document.getElementById("CONTACT_PARENT_DIV").style.display = "block";
}


function validate_form()
{
  if( document.Contact_Form.name.value == "" || document.Contact_Form.name.value ==" " || document.Contact_Form.name.value == undefined)
  {
    alert("HEY! You can't leave your name blank!");
    
    return false;
  }
  

  else if( document.Contact_Form.type.value == "" || document.Contact_Form.type.value == " ")
  {
    alert("HEY! You can't leave the nature of your message blank!");
    
    return false;
  }


  else if( document.Contact_Form.occupation.value == "" || document.Contact_Form.occupation.value == undefined)
  {
    alert("HEY! You can't leave your occupation blank!");
    
    return false;
  }
  

  else if( document.Contact_Form.not_a_spammer.checked == false)
  {
    alert("HEY! Please confirm that you have read everything and are not spamming!");
    
    return false;
  }


  else
  {
    var fname = document.Contact_Form.name.value;
    var type = document.Contact_Form.type.value;
    var occ = document.Contact_Form.occupation.value;
    var text = document.Contact_Form.message.value;
    var greet = "Dear "+fname;

    document.getElementById("Nightclub_Description_Title").innerText = greet;

    console.log("Thank you!\nThe submitted details were:\nName:\t", fname, "\nSubject:\t", type, "\nOccupation:\t", occ, "\nExtra Text:\t", text, "\nThank you");
    
    alert("Thank you!");
    
    setTimeout(() => {  Close_Contact(); }, 1000);
  }

}


function change_greeting(time)
{
  if(toggle_header)
  {
    console.log("Greeting function start! IT'S WORKING!!!!!!");
    
    var greetings = 
    ["BIENVENU", "WELKOM", "MIRË SE VINI", "أهلا بك", "DOBRODOŠLI", "欢迎", "VÍTEJTE", 
    "WILLKOMMEN", "VELKOMINN", "ÜDVÖZÖLJÜK", "ようこそ", "歡迎", "WITAMY", "BINE ATI VENIT", 
    "ਜੀ ਆਇਆਂ ਨੂੰ", "ДОБРО ПОЖАЛОВАТЬ", "AFIO MAI", "WAG-WAG GE", "FÁILTE", "ДОБРОДОШЛИ", 
    "ڀلي ڪري آيا", "BIENVENIDO", "ХУШ ОМАДЕД", "வரவேற்பு", "Сәлам", "స్వాగతం", "HOŞ GELDİN", "Ласкаво просимо", 
    "خوش آمدید", "HOAN NGHÊNH", "ברוכים הבאים", "KAABO", "UYAKWAMUKELA", "HERZLICH WILLKOMMEN", "BIENVENIDOS", "BENVENUTA", 
    "WELINA", "WELCOME"];
    
    
    var Greeting_index = 0;

    let startVar = setInterval(Changer ,time);

    function Changer() 
    {
      const greet = greetings[Greeting_index];

      document.getElementById("Video_Title").innerHTML = greet;

      console.log(greet);
      
      Greeting_index++;
      
      if(Greeting_index == greetings.length)
      {
        Greeting_index = 0;
      }
    }
  }
}

<head>
    <script type="text/javascript">
        function insert(){
            var src = document.getElementById("gamediv");
            var img = document.createElement("img");
            img.src = "img/eqp/"+this.apparel+"/"+this.facing+"_idle.png";
            src.appendChild(img);
        }
     </script>
 </head>
 <body>
     <div id="gamediv">
         <script type="text/javascript">
             insert();
         </script>
     </div>
 </body>

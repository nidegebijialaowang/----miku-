 var n_ratio;
        var b_init = true;
        setInterval(set_td_change, 50);
        var n_flag;
        function set_td_change() {
            if (b_init) {
                n_ratio = 1;
                n_flag = 1;
                b_init = false;
            }
            else {
                n_ratio = n_ratio + n_flag;
            }
            var c_css = "linear-gradient(270deg, #84fab0 0%,#8fd3f4 " + n_ratio + "% )";
            c_css += ",linear-gradient(90deg, #84fab0 0%,#8fd3f4 " + n_ratio + "% )";
            $(".cardcolor-changed").css("background-image", c_css);
            $(".cardcolor-changed").css("background-size", "100% 50%");
            if (n_ratio >= 101 || n_ratio < 1) {
                n_flag = -n_flag; //改变方向
            }
        }

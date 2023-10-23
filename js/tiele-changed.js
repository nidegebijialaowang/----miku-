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
            var c_css = "linear-gradient(270deg, rgba(17,198,47, 0.5) 0%,rgba(0,38,209, 0.5) " + n_ratio + "% )";
            c_css += ",linear-gradient(90deg, rgba(17,198,47, 0.5) 0%,rgba(0,38,209, 0.5) " + n_ratio + "% )";
            $(".titlecolor-changed").css("background-image", c_css);
            $(".titlecolor-changed").css("background-size", "100% 50%");
            if (n_ratio >= 101 || n_ratio < 1) {
                n_flag = -n_flag; //改变方向
            }
        }

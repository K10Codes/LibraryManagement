package com.hexad.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UiController {

    @RequestMapping({
            "/",
            "/library"
    })
    public String handler() {
        return "forward:index.html";
    }

}

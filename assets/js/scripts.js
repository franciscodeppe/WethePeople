var $grid = $('.grid').masonry({
    columnWidth: 50,
    horizontalOrder: true,
});


var work = [{
    name: "Business Incorporation",
    id: "Services",
    description: "Armet Davis Newlove needed an entire website overhaul. There previous website had not be touhced since the late 90's and so I took it upon myself to give them a fresh new look that also appealed to their historical roots of design. I selected a color scheme I thought fit for the architecture firm who's history and aesthetic can be traced to the 60's. I wanted to give them a signficant landing page as well which showcased some of their more popular and well known work. The website also features a fully functional file access application with authentication for Administrators, Architects as well as the Firm's Clients. It served to help facilitate the document access their clients in an intuitive web-app design.  <br> Languages used: HTML, CSS, JS"
},
{
    name: "Buy Sell Agreement",
    id: "Services",
    description: "Armet Davis Newlove needed an entire website overhaul. There previous website had not be touhced since the late 90's and so I took it upon myself to give them a fresh new look that also appealed to their historical roots of design. I selected a color scheme I thought fit for the architecture firm who's history and aesthetic can be traced to the 60's. I wanted to give them a signficant landing page as well which showcased some of their more popular and well known work. The website also features a fully functional file access application with authentication for Administrators, Architects as well as the Firm's Clients. It served to help facilitate the document access their clients in an intuitive web-app design.  <br> Languages used: HTML, CSS, JS"
},
{
    name: "Conservatorship",
    id: "Services",
    description: "Art Work"
}, {
    name: "Deed of Trust",
    id: "Services",
    description: "I had been working on doing some mock brand/logo work and a friend passed by with a request for one she could use as a graphic for a business card or personal blog. Given her initials A. Z. and some direction with style and taste I created this logo making use of negative space and simple shapes."
}, {
    name: "Divorce",
    id: "Services",
    description: "Art Work"
},
{
    name: "Divorce (with Children)",
    id: "Services",
    description: "Art Work"
}, {
    name: "Homestead",
    id: "Services",
    description: "A personal project which allowed me to practice hooking ino public API's to retreive data and manipulate the dom. Using the Giphy API I was able to create a application which allowed for searches to Giphy website. The search would then append matches to the DOM and allow for pause = resume of the gif. Functionality for a slider to determine how many gifs to show as well as one for rating as added for a more complete application. <br> Languages used: HTML, CSS, JS"
}, {
    name: "Joint Trust",
    id: "Services",
    description: "Art Work"
},
{
    name: "Living Trust",
    id: "Services",
    description: "A simple project for futher practice of DOM manipulation and javascript game theory. Simply an array of objects which contained words and clues to what needed to be guessed. Feautres a yeyup events to track what keys are being pressed as well as some ajax dom manipulation to display the pressed letter in its occupied space.<br> Languages used: HTML, CSS, JS"
},
{
    name: "Legal Separation",
    id: "Services",
    description: "Art Work"
}, {
    name: "Mediation",
    id: "Services",
    description: "Art Work"
}, {
    name: "Name Change",
    id: "Services",
    description: "Art Work"
}, {
    name: "Paternity",
    id: "Services",
    description: "A client needed a brand logo for a new web based talent/model agency that was being formed. They asked for a modern, sleek feel and design to go with their pages aesthetic. I assisted in the early design process, supplying some ideas which they based their actual logo off of.<br> Created using Photoshop."
}, {
    name: "Partnership Agreement",
    id: "Services",
    description: "Art Work"
}, {
    name: "Probate",
    id: "Services",
    description: "Art Work"
},
{
    name: "Small Claims",
    id: "Services",
    description: "The Latest was a web application aimed at bringing all of your news sources to one place. I served as the lead Front-End and UI/UX developer. I created the layout and design for the project and implement a back-end to tie into that design."
}, {
    name: "Unlawful Detainer",
    id: "Services",
    description: "Art Work"
}, {
    name: "Wills",
    id: "Services",
    description: "Art Work"
},
]



function servicesPopulate(i) {
    var projectContainer = "<div class='item " + work[i].id + "'>" +
        "<div class='project-info'>" +
        "<a href='#/'><h4 class=" + work[i].name + ">" + work[i].name + "</h4></a>" +
        "</div>" +
        "</div>";
    $grid.masonry('layout');
    $grid.append(projectContainer);

}

$(work).each(function (i) {
    servicesPopulate(i)
});


// Search through work ----------------------
$(document).ready(function (event) {

    $(".services-btn").on("click", function () {
        // remove current items
        $(".grid").fadeOut(500, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                if (this.id === "Services") {
                    servicesPopulate(i)

                }
            })
        })
        $(".grid").fadeIn(300)

    });
    $(".media-btn").on("click", function () {
        $(".grid").fadeOut(500, function () {
            $(".grid").html("");

            $(work).each(function (i) {
                if (this.id === "logo") {
                    servicesPopulate(i)
                }
            })
        })
        $(".grid").fadeIn(300)
    });

    // Nav hover - underline

    $(".nav>a").mouseenter(function () {
        $(this).children("hr").animate({
            "width": "90%"
        }, 50)
    });
    $(".nav>a").mouseleave(function () {
        $(this).children("hr").animate({
            "width": "0px"
        }, 5)
    });


    // Project Hover - transition and link
    $(document).on("mouseenter", ".item", function () {
        $(this).find("div.more-info").animate({
            "height": "60px",
        }, 400)
    });
    $(document).on("mouseleave", ".item", function () {
        $(this).find("div.more-info").animate({
            "height": "0px",
        }, 400)
    });
    // Project Select ----------------------
    function relatedWork(i) {
        var relatedWork =
            "<a href='#/'> <div id='" + work[i].name + "' class='" + work[i].id + " " + work[i].name + " related-project-container'>" +
            "<div class='related-project-info'>" +
            "<h3>" + work[i].name + "</h3>" +
            "</div>" +
            "</div>" +
            "</div></a>";

        $(".related-work").append(relatedWork);
        return i < 3


    }

    function selectedProject(i) {


        var projectTable =
            "<h2>stats</h2>" + "<hr>" +
            "<table><tbody>" +
            "<tr><td>Client:</td>" +
            "<td>Category:</td>" +
            "</tr><tr><td>" + work[i].client + "</td><td>" + work[i].type +
            "</td></tr></tbody></table>"



        var projectShow =
            "<div class='" + work[i].id + " selected-project-container'>" +
            "<div class='row'>" +
            "<h3>" + work[i].name + "</h3>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='selected-project-img'>" +
            "<img src='assets/media/" + work[i].source + "' alt=''>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='selected-project-info container'>" +
                "<div class='col-lg-6 col-xs-6'>" +
                    "<h2>Service Description</h2><hr><p>" + work[i].description + "</p></div>" +
                "</div>" +
            "</div>" +
            "<div class='related col-lg-6 col-xs-6'>" +
            "<h2>Other Sercies</h2>" + "<hr>" +
            "<div class='related-work'>" + "</div>" +
            "</div>" +
            "</div>" +
            "</div>";

        $(".selected-project").html("");
        $(".selected-project").append(projectShow);

        var type = work[i].type
        var name = work[i].name

        $(work).each(function (i) {
            if (work[i].type === type && work[i].name !== name) {
                relatedWork(i)
            }

        });

    }



    $(document).on("click", ".work[i].name", function (event) {

        var id = $(this).attr("id")

        $(work).each(function (i) {
            if (id === work[i].name) {
                selectedProject(i)
                $(".about-services").css("display", "none")
            }
        })

        $(document).on("click", ".related-project-container", function () {

            name = $(this).attr("id")
            $(work).each(function (i) {

                if (name === work[i].name) {
                    $(".selected-project").fadeOut(500, function () {

                    }).promise().done(function () {
                        selectedProject(i)
                        $(".selected-project").fadeIn(1000)
                    });

                }
            })
        })


        $(".project-page").stop().animate({
            "right": "0px",

        }, 500);
        $(".project-page").css("overflow", "visible")

        $(".back").click(function (event) {
            $(".project-page").animate({
                "right": "100vw",
            }, 500)
            $(".project-page").css("overflow", "hidden")
            $(".about-services").css("display", "block")
            event.preventDefault();
        });
        event.preventDefault();
    })

})
Vue.component("education", {
  template: `
        <div>
        <h3>{{i18next.t("educationText")}}</h3>
        <hr class="divider"><br>

        <div class="row edu-desktop">
        <div class="col-md left-plate">
            <div class="backplate-edu">
                <div class="row">
                    <div class="col-3"> <img class="edu-img" src="../static/images/METU_logo.png"> </div>
                    <div class="col-9"> 
                        <small class="text-primary">2014 - 2018</small>
                        <h3 class="text-primary">Middle East Technical University</h3>
                        <p class="text-secondary"><strong>BSc. Mechanical Engineering</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md right-plate">
            <div class="backplate-edu">   
                <div class="row"> 
                    <div class="col-3"> <img class="edu-img" src="../static/images/ETH_logo.png"> </div>
                    <div class="col-9">
                        <small class="text-primary">2018 - 2021</small>
                        <h3 class="text-primary">ETH Zürich</h3>
                        <p class="text-secondary"><strong>MSc. Mechanical Engineering</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="row edu-mobile">
            <div class="col-md left-plate">
                <div class="backplate-edu">
                    <small class="text-primary">2014 - 2018</small>
                    <h3 class="text-primary edu-text">Middle East Technical University</h3>
                    <p class="text-secondary edu-text2"><strong>BSc. Mechanical Engineering</strong></p>
                </div>
            </div>
            <div class="col-md right-plate">
                <div class="backplate-edu">   
                    <small class="text-primary">2018 - 2021</small>
                    <h3 class="text-primary edu-text" style="font-size: 18pt;">ETH Zürich</h3>
                    <p class="text-secondary edu-text2"><strong>MSc. Mechanical Engineering</strong></p>
                </div>
        </div>
    </div>
    `,
});
new Vue({ el: "#education" });

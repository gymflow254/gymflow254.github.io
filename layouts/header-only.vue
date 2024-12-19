<template>
  <div id="page" class="page font--jakarta">
    <div id="main-menu" class="wsmainfull menu clearfix">
      <div class="wsmainwp clearfix">
        <!-- HEADER BLACK LOGO -->
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            width: 100%;
          "
        >
          <img
            style="z-index: 1; height: 150px;"
            src="/assets/images/gymflow254-large.png"
            alt="logo"
          />
        </div>
        <!-- END MAIN MENU -->
      </div>
    </div>
    <slot />
  </div>
</template>

<style src="~/assets/css/color-scheme/default.scss" lang="scss"></style>

<style lang="css">
@media (max-width: 992px) {
  .wsmainfull {
    height: 0px;
  }
}
</style>

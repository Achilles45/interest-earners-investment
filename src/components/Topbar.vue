<template>
  <div class="topbar d-none d-lg-block">
      <div class="container">
        <div class="row">
            <div class="col-md-3">
                 <i class="fa fa-phone"></i>&nbsp;&nbsp; 08106864691&nbsp;  (Mon - Fri, 9am to 4pm)
            </div>
            <div class="col-md-4">
                 <i class="fa fa-envelope"></i>&nbsp;&nbsp; Interestearnersinvestment@gmail.com
            </div>
            <div class="col-md-5">
                <i class="fa fa-cubes"></i>&nbsp;&nbsp; Note that Terms and conditions applies to all investment plans
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.topbar{
    background: #000;
    color: #fff;
    padding: 1rem 0;
    font-size: .75rem;
    .fa-phone, .fa-envelope, .fa-cubes{
      margin-right: .5rem;
    }
}
</style>
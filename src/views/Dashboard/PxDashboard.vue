<template>
  <div class="container-fluid mt-5">
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="mb-4 mb-lg-0 col-lg-7">
          <div class="h-100 card">
            <div class="card-header">
              <h4 class="card-heading">Your Account Balance</h4>
            </div>
            <div class="card-body">
              <div class="chart-holder">
                <canvas
                  class="w-100"
                  style="
                    display: block;
                    box-sizing: border-box;
                    height: 397.273px;
                    width: 797.273px;
                  "
                  width="877"
                  height="437"
                ></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-4 mb-lg-0 col-lg-5">
          <div class="h-50 pb-4 pb-lg-2">
            <div class="h-100 card">
              <div class="d-flex card-body">
                <div class="w-100 align-items-center row">
                  <div class="mb-4 mb-sm-0 col-sm-5">
                    <h2 class="mb-0 d-flex align-items-center">
                      <span>86.4</span
                      ><span class="dot bg-green d-inline-block ms-3"></span>
                    </h2>
                    <span class="text-muted text-uppercase small"
                      >Work hours</span
                    >
                    <hr />
                    <small class="text-muted">Hours worked this month</small>
                  </div>
                  <div class="col-sm-7">
                    <canvas
                      width="195"
                      height="96"
                      style="
                        display: block;
                        box-sizing: border-box;
                        height: 87.2727px;
                        width: 177.273px;
                      "
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-50 pt-lg-2">
            <div class="h-100 card">
              <div class="d-flex card-body">
                <div class="w-100 align-items-center row">
                  <div class="mb-4 mb-sm-0 col-sm-5">
                    <h2 class="mb-0 d-flex align-items-center">
                      <span>325</span
                      ><span class="dot bg-indigo d-inline-block ms-3"></span>
                    </h2>
                    <span class="text-muted text-uppercase small"
                      >Tasks Completed</span
                    >
                    <hr />
                    <small class="text-muted"
                      >Tasks Completed this months</small
                    >
                  </div>
                  <div class="col-sm-7">
                    <canvas
                      width="195"
                      height="96"
                      style="
                        display: block;
                        box-sizing: border-box;
                        height: 87.2727px;
                        width: 177.273px;
                      "
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Table />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/TablasDatos';

export default {
  components: {
    Table,
  },
};
</script>

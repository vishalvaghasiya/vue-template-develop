<template>
    <div class="main-panel" id="chartId">
        {{forceRerender()}}
        <div class="content-wrapper">
            <div class="page-header">
                <h3 class="page-title"> Chart-js </h3>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Charts</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Chart-js</li>
                    </ol>
                </nav>
            </div>
            <div class="row">
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Line chart</h4>
                            <canvas id="lineChart" style="height:250px"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Bar chart</h4>
                            <canvas id="barChart" style="height:230px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Area chart</h4>
                            <canvas id="areaChart" style="height:250px"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Doughnut chart</h4>
                            <canvas id="doughnutChart" style="height:250px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Pie chart</h4>
                            <canvas id="pieChart" style="height:250px"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Scatter chart</h4>
                            <canvas id="scatterChart" style="height:250px"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import chart from "../../../public/js/chart";
    import chartmin from "../../../public/js/Chart.min";
    /*this js file not show devTools but work perfectly */
    export default {
        el: '#chartId',
        methods: {
            forceRerender: function () {
                if (!window.location.hash) {
                    window.location = window.location + '#loaded';
                    window.location.reload();
                }
            }
        }
    }
</script>


<style scoped>

</style>
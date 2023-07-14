<!DOCTYPE html>
<html>
<head>
    <title>Data Visualisation</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
        /* Just to center the charts on page */
        body {
            background-color: #000; /* Dark background color */
            color: #fff; /* Light text color */
            margin: 0;
        }
        .container {
            width: 98%;
            height: 99%;
            min-height: 400px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
        }
        canvas {
            width: 100% !important;
            background-color: #ffffff0a;
            padding: 10px;
            border-radius: 10px;
        }
        .left, .right {
            flex: 1;
            padding: 20px;
            overflow: auto;
            height: 90vh;
        }

        #myChart {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
    <body style="background-color: #333">
        <div class="container-fluid" style="height: 100vh;">
            <div class="row h-100">
                <div class="col p-3 d-flex flex-column" style="overflow:auto;">
                    <button class="btn btn-primary btn-block mb-3" data-toggle="modal" data-target="#addLogsModal">Add Logs</button>
                    <button class="btn btn-danger btn-block" data-toggle="modal" data-target="#removeLogsModal">Remove Logs</button>
                </div>
                <div class="col p-3" style="overflow:auto;">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </div>

        <!-- Add Logs Modal -->
        <div class="modal fade" id="addLogsModal" tabindex="-1" role="dialog" aria-labelledby="addLogsModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addLogsModalLabel">Add Logs</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" action="#">
                            <!-- Add logs form fields here -->
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Remove Logs Modal -->
        <div class="modal fade" id="removeLogsModal" tabindex="-1" role="dialog" aria-labelledby="removeLogsModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="removeLogsModalLabel">Remove Logs</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" action="#">
                            <div class="form-group">
                                <label for="logSelect">Select Log to Remove:</label>
                                <select class="form-control" id="logSelect" name="logSelect">
                                    <!-- Options for existing logs here -->
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-trendline@2.0.3/src/chartjs-plugin-trendline.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <script src="data.js"></script>
        <script src="charts.js"></script>
    </body>
</html>

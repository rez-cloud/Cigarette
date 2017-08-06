import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

//let storedSelectedDateRange = {
//    id: 3,
//    title: 'Past 30 days',
//    dateStart: moment().subtract(30, 'days'),
//    dateEnd: moment()
//};

//if (sessionStorage.getItem('selectedDateRange')) {
//    storedSelectedDateRange = JSON.parse(sessionStorage.getItem('selectedDateRange'));
//    storedSelectedDateRange.dateStart = moment(storedSelectedDateRange.dateStart);
//    storedSelectedDateRange.dateEnd = moment(storedSelectedDateRange.dateEnd);
//}

class MetricView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isListVisible: false,
            //ranges: dateRangesList,
            //isTrendLineDisplayed: sessionStorage.getItem(`isTrendLineFixed_${props.metricId}`) === 'true',
            //isBenchmarkLineDisplayed: sessionStorage.getItem(`isBenchmarkLineDisplayed_${props.metricId}`) === 'true'
        };

        //this.toggleTrendVisibility = this.toggleTrendVisibility.bind(this);
        //this.toggleBenchmarkVisibility = this.toggleBenchmarkVisibility.bind(this);
        //this.toggleDateRangeFilterListVisibility = this.toggleDateRangeFilterListVisibility.bind(this);
    }

    render() {
        
        return (
            <div className={metricViewCss['container']}>
                <div className={metricViewCss['metric']}>
                    <div className={metricViewCss['header-metric']}>
                      
                    </div>
                    <div>
                      
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMetric: (metricId, dateStart, dateEnd, categoryId) => fetchMetric(dispatch, metricId, dateStart, dateEnd, categoryId),
    fetchCategories: () => fetchCategories(dispatch)
});

const mapStateToProps = state => ({
    //categories: state.categories,
    //selectedDateRange: state.dateRange.selectedDateRange,
    //selectCustomDateRange: state.dateRange.selectCustomDateRange,
    //selectedMetric: state.currentMetric.selectedMetric,
    //inProgress: state.currentMetric.IsLoading,
    //error: state.currentMetric.error
});

export default connect(mapStateToProps, mapDispatchToProps)(MetricView);
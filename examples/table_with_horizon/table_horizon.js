// Generated by CoffeeScript 1.3.3
(function() {

  App.TableHorizonExample = Ember.Namespace.create();

  App.TableHorizonExample.HorizonTableCellView = Ember.Table.TableCell.extend({
    templateName: null,
    heightBinding: 'controller.rowHeight',
    horizonContent: Ember.computed(function() {
      var normal, _i, _results;
      normal = d3.random.normal(1.5, 3);
      return (function() {
        _results = [];
        for (_i = 0; _i < 100; _i++){ _results.push(_i); }
        return _results;
      }).apply(this).map(function(i) {
        return [i, normal()];
      });
    }).property(),
    onWidthDidChange: Ember.observer(function() {
      this.$('svg').remove();
      return this.renderD3View();
    }, 'width'),
    didInsertElement: function() {
      return this.onWidthDidChange();
    },
    renderD3View: function() {
      var chart, data, height, svg, width;
      width = this.get('width');
      height = this.get('height');
      data = this.get('horizonContent');
      chart = d3.horizon().width(width).height(height).bands(2).mode("mirror").interpolate("basis");
      svg = d3.select('#' + this.get('elementId')).append("svg").attr("width", width).attr("height", height);
      return svg.data([data]).call(chart);
    }
  });

  App.TableHorizonExample.TableController = Ember.Table.TableController.extend({
    hasHeader: true,
    hasFooter: false,
    numFixedColumns: 0,
    numRows: 100,
    rowHeight: 35,
    columns: Ember.computed(function() {
      var horizon, name;
      name = Ember.Table.ColumnDefinition.create({
        columnWidth: 100,
        headerCellName: 'Name',
        getCellContent: function(row) {
          return 'Horizon ' + row['name'];
        }
      });
      horizon = Ember.Table.ColumnDefinition.create({
        columnWidth: 600,
        headerCellName: 'Horizon',
        tableCellViewClass: 'App.TableHorizonExample.HorizonTableCellView',
        getCellContent: Ember.K
      });
      return [name, horizon];
    }).property(),
    content: Ember.computed(function() {
      var normal, _i, _ref, _results;
      normal = d3.random.normal(1.5, 3);
      return (function() {
        _results = [];
        for (var _i = 0, _ref = this.get('numRows'); 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function(num, index) {
        var data, _i, _results;
        data = (function() {
          _results = [];
          for (_i = 0; _i < 100; _i++){ _results.push(_i); }
          return _results;
        }).apply(this).map(function(i) {
          return [i, normal()];
        });
        return {
          name: index,
          data: data
        };
      });
    }).property('numRows')
  });

}).call(this);

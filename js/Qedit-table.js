$(document).ready(function() {
    $(function() {
        $('#table').bootstrapTable(
          //console.log($(this))
        );
         
         $('#table').on('editable-init.bs.table', function (e, field, row, old, $el) {
            console.log('INIT fired');
        });
         
         $('#table').on('editable-save.bs.table', function (e, field, row, old, $el) {
             //id,name, price from header [data-field]
            console.log('SAVE fired field changed : '+field+" new value : "+row[field]+" othe values of row : "+row.id+ " ~ "+row["price"]);
        });
         
         $('#table').on('editable-shown.bs.table', function (e, field, row, old, $el) {
            console.log('for edit fired');
        });
         
          $('#table').on('editable-hidden.bs.table', function (e, field, row, old, $el) {
            console.log('EDIT FINISHED fired');
        });
    });
});
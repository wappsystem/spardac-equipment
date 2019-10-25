(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "weekly-booking":       {url:"$H/m/calendar-week.html",Table:"demo-spardac-equipment-booking","booking":"booking-form","booking2":"m8",lookup:"demo-spardac-equipment-list"},
        "monthly-booking":       {url:"$H/m/calendar-month.html",Table:"demo-spardac-equipment-booking","booking":"booking-form",lookup:"demo-spardac-equipment-list"},
        "m7":       {url:"$H/m/calendar-day.html",Table:"demo-spardac-equipment-booking","booking":"booking-form",lookup:"demo-spardac-equipment-list"},
        "booking-form":       {url:"$H/m/booking-form.html",Table:"demo-spardac-equipment-booking",lookup:"demo-spardac-equipment-list"},
        "m8":       {url:"$H/m/booking-form.html",Table:"demo-spardac-equipment-booking",lookup:"demo-spardac-equipment-list"},
        "booking-data":       {url:"$H/m/booking-data.html",Table:"demo-spardac-equipment-booking",form_module:"booking-form"},
        "equipment-data":       {url:"$H/m/equipment-data.html",Table:"demo-spardac-equipment-list",form_module:"equipment-form"},
        "equipment-form":       {url:"$H/m/equipment-form.html",Table:"demo-spardac-equipment-list"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();

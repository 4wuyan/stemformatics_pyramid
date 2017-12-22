var module={};function round_to_two_decimal_places(a){new_num=Math.round(a*100)/100;return new_num}var tip=d3.tip().attr("class","d3-tip");var tooltip=d3.tip().attr("class","d3-tip").offset([0,+110]).html(function(a){temp="Probe: "+a.Probe+"<br/>Sample Type: "+a.Sample_Type+"<br/>Sample ID: "+a.Replicate_ID+"<br/>";return temp});function run_violin_gene_expression_graph(x,e,k,g,h,n,b,r,c,p){var s=k.split(",").length;var v=new Array();k=remove_spaces(k);var q=k.split(",");if(q[0]=="Sample_Type"||q[1]=="Sample_Type"){first_option="Sample_Type"}else{first_option=q[0]}sample_type_order=r.sampleTypeDisplayOrder;if(sample_type_order!="none"){data.sort(function(z,y){return sample_type_order.indexOf(z.Sample_Type)-sample_type_order.indexOf(y.Sample_Type)})}else{data.sort(function(z,y){first=z.Sample_Type;second=y.Sample_Type;val=first.localeCompare(second);return val})}max=0;min=0;number_of_increments=0;count=0;probes_types=new Array();probes=new Array();probe_count=0;line_groups=new Array();line_group_array=new Array();line_group_count=0;j=0;number_of_colours=39;colour_count=0;sample_types=[];if(multiview_graph!="yes"){sample_type_hover={}}sample_id_list=[];sample_type_names="";sample_type_count=0;data.forEach(function(y){y.Expression_Value=+y.Expression_Value;y.Standard_Deviation=+y.Standard_Deviation;y.Probe=y.Probe;if(y.Expression_Value+y.Standard_Deviation>max){max=y.Expression_Value+y.Standard_Deviation}if(y.Expression_Value-y.Standard_Deviation<min){min=y.Expression_Value-y.Standard_Deviation}if($.inArray(y.Probe,probes_types)==-1){probes_types.push(y.Probe);probe_count++}if($.inArray(y.Replicate_ID,sample_id_list)==-1){sample_id_list.push(y.Replicate_ID)}if($.inArray(y.Sample_Type,sample_types)==-1){sample_type_count++;sample_types.push(y.Sample_Type);sample_type_hover[y.Sample_Type]=y.Sample_Type_Long}if($.inArray(y.LineGraphGroup,line_group_array)==-1){line_group_array.push(y.LineGraphGroup);line_groups[y.LineGraphGroup]=line_group_count;j++;line_group_count++}if($.inArray(y[first_option],v)==-1){v.push(y[first_option])}count++});var i={};i=setup_colours_for_group(v.sort(),i,number_of_colours,(r.probeColours));var d=Object.keys(r.sampleTypeDisplayGroups).sort(function(z,y){return r.sampleTypeDisplayGroups[z]-r.sampleTypeDisplayGroups[y]});if((k.split(",")[0]=="Sample_Type"||k.split(",")[1]=="Sample_Type")){v=d}var f={};var l={};l=x;var o={};for(sample_type in sample_types){sample_type_names=sample_types[sample_type]+" "+sample_type_names}number_of_increments=max-min;y_axis_largest_value=max;if(number_of_increments<r.medianDatasetExpression){number_of_increments=Math.ceil(r.medianDatasetExpression)}else{if(number_of_increments<r.detectionThreshold){number_of_increments=Math.ceil(r.detectionThreshold)}}number_of_increments=Math.ceil(number_of_increments);if((number_of_increments*increment_value)<6){number_of_increments=6}if((number_of_increments*increment_value)>10){number_of_increments=10}probes=probes;line_groups=line_groups;probe_count=probe_count;title=n;subtitle1=r.Title;subtitle2=r.cellsSamplesAssayed;target=e;width=data.length*1;horizontal_grid_lines=width;if(width<1000){width=1000}var a={multi_group:s,legend_list:{name:first_option,list:v},colour_array:i,tip_decoy:tip,legend_text:"yes",legend_shorten_text:"yes",ref_type:p,substring_legend_length:15,sample_types:sample_types,num_sample_types:sample_type_count,sample_type_count:sample_type_count,legend_on_x_axis:"no",jitter:"no",test:"no",test_path:"/home/ariane/Documents/stemformatics/bio-js-box-plot/test/box_plot_test.csv",bar_graph:"no",draw_scatter_on_box:scatter_needed,radius:4,ref_name:h,level_of_overlap:0.1,sort_by_sample_id:"no",y_axis_largest_value:y_axis_largest_value,probe_name_for_tooltip:c,legend_padding:190,legend_rect_size:20,height:400,x_axis_list:unique_probes_sorted,legend_probe_tip:"none",width:graph_box_width,margin:{top:250,left:130,bottom:300,right:270},initial_padding:10,x_axis_label_padding:10,text_size:"12px",title_text_size:"16px",increment:number_of_increments*increment_value,display:{hoverbars:"yes",error_bars:"no",legend:"yes",horizontal_lines:"yes",vertical_lines:"yes",x_axis_labels:"yes",y_axis_title:"yes",horizontal_grid_lines:"yes"},probe_list:probes_types,circle_radius:4,hover_circle_radius:8,sortByOption:k,show_min_y_axis:g,box_width:50,box_width_wiskers:5,sample_type_order:r.sampleTypeDisplayOrder,line_group_order:"none",probe_order:unique_probes_sorted,include_sample_type_x_axis:"no",size_of_sample_type_labels:200,x_axis_padding:50,background_colour:"white",background_stroke_colour:"black",background_stroke_width:"1px",colour:x,font_style:"Arial",grid_colour:"black",grid_opacity:1,y_label_text_size:"14px",y_label_x_val:60,data:data,domain_colours:["#FFFFFF","#7f3f98"],error_bar_width:5,error_stroke_width:"1px",error_dividor:100,horizontal_lines:[["Detection Threshold "+r.detectionThreshold,"green",r.detectionThreshold],["Median "+r.medianDatasetExpression,,r.medianDatasetExpression]],horizontal_line_value_column:"value",horizontal_grid_lines:width,legend_class:"legend",legend_range:[0,100],line_stroke_width:"2px",show_legend_tooltip:"yes",legend_toggle_opacity:"yes",number_of_colours:39,padding:2,probe_count:probe_count,axis:"top",probes:probes,line_groups:line_groups,num_line_groups:line_group_count,subtitles:[subtitle1],stroke_width:"3px",stroke_width_num:3,target:target,title:title,title_class:"title",tip:tip,tooltip:tooltip,watermark:"http://www.stemformatics.org/img/logo.gif",x_axis_text_angle:-45,x_axis_title:"Line Groups",x_column:"Line_Group_ID",x_middle_title:500,y_axis_title:r.yAxisLabel,y_column:"Expression_Value"};var t=biojsvisviolingraph(a);var u=e;var m=u.getElementsByTagName("svg")[0];var w=(new XMLSerializer).serializeToString(m)};
<%inherit file="/default.html"/>
<%namespace name="Base" file="/base.mako"/>

<%def name="includes()">
    <script type="text/javascript" src="${h.url('/js/landing_pages.js')}"></script>
</%def>

<div class="content landing_page_graph">
    <div class="baseMarginLeft" >
        <div class="hidden" id="show_help_flag">NO</div>

        <div class="landing_page_header graphs block">
            <div class="left_square">
                <div class="header">Gene Expression Graph</div>
                <div class="logo geg_logo"></div>
            </div>
            <div class="description centered">
                <p>
                This is the Gene Expression Graph. In this graph you select a gene and a dataset and you can choose to view a boxplot graph, a bar graph, a scatterplot and if available, a time series graph.
               </p>
               <p>
                You can select a gene from the gene search below or follow the tutorials by clicking on the large boxes with arrows below. Anything that is clickable will change colour if you hover over the item.
               </p>
            </div>
        </div>

        <div class="clear"></div>

        <%def name="show_all_option()"> </%def>
        ${Base.pre_enclosed_search_box()}
        <%
        text.title = "Gene Search for Gene Expression Graph"
        text.help = "Enter Symbol or Ensembl IDs for more precise results. It will provide suggestions via an autocomplete after four characters."
        text.input_id = "geneSearch"
        text.search_button_id = "viewGenes"
        text.search_action ='#'
        text.search_value = ''
        text.input_class = 'geg'
        %>
        ${Base.enclosed_search_box(text,self.show_all_option)}


        <div class="tutorials base_middle_width">
            <div class="title" >Tutorials</div>
            <a data-tutorial="gene_expression_graph" class="in_page_tutorial_link" onclick="return audit_help_log ('gene_expression_graph','help_tutorial_landing') ;">
                <div class="display_box">
                    <div class="left">
                        <div class="header">Direct access to Gene Expression Graph</div>
                        <div class="description">
    This link provides a tutorial to enter in a gene and then a dataset to take you directly to the Gene Expression Graph page. It will show you some of the options available.<br/><br/>At any time you can close the tutorial by clicking on the X in the top right hand corner. Please click to start.
                        </div>
                    </div>
                    <div class="snapshot big_arrow"></div>
                </div>
            </a>
            ${Base.tutorial_gene_search_single_gene_graphs()}

            <div class="clear"></div>
        </div>

    </div>
</div>

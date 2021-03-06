<%inherit file="/default.html"/>\
<%namespace name="Base" file="/base.mako"/>
<%def name="includes()">
    <link href="${h.url('/css/contents/index.css')}" type="text/css" rel="stylesheet"> 
    <link href="${h.url('/css/contents/biologists.css')}" type="text/css" rel="stylesheet"> 
    <link href="${h.url('/css/contents/biology_article.css')}" type="text/css" rel="stylesheet"> 
</%def>
	
    <!-- links on the leftColumn -->
    ${Base.links()}  

    <div class="rightColumn">
        <div class="mainTextColumn">
            <div class="articleTitle">
                <span>MAKING BLOOD</span>
            </div>
            <div class="date">13 December 2010</div>
            <div class="mainText">
                    <p>
                    Haemopoiesis – the generation of blood – provides the archetype model for hierarchical differentiation of adult tissues. Model systems derive stem cells from adult bone marrow or foetal cord blood. The datasets here profile putative stem, progenitor and differentiated cell populations.
                    </p>
                    <p>
                    <div class="articleImageCaption">
                        <img class="small" src="${h.url('/images/contents/forBiologists/Blood.png')}" />
                        <div class="caption">
                            <div class="captionText">
                                The uncertainty of supply and the demand for cells rare in healthy blood donors 
                                    provides an imperative to develop new methods for growing blood. 
                            </div>
                        </div>
                    </div>
                    
                    The gene expression signatures of haemopoietic stem and progenitor cells, and their differentiated progeny, provide 
                    important information about the processes of lineage commitment and development. Blood products are an essential clinical resource 
                    – but current isolation methods from blood donors carry a degree of risk. 
                    </p>
                    <p>
                    The uncertainty of supply, isotype matching, the health status of donors, and the demand for cells rare in healthy blood donors 
                    provides an imperative to develop new methods for growing blood. Identification of the right types of stem or progenitor cells, 
                    and understanding the conditions that promote expansion and differentiation to a desired cell type are immediate outcomes of stem cell research.  
                    The datasets generated by studying haemopoiesis also provide insight into blood disorders such as haemophilias, neutropenia or leukaemia.
                    </p>
                    
            </div>
            <div class="biologistInfo">
                <h2>References</h2>
                <div class="ruler"></div>
                <p>
               Loughran, S. J., E. A. Kruse, D. F. Hacking, C. A. de Graaf, C. D. Hyland, T. A. Willson, K. J. Henley, S. Ellis, A. K. Voss, D. Metcalf, D. J. Hilton, W. S. Alexander, and B. T. Kile (2008), "The transcription factor Erg is essential for definitive hematopoiesis and the function of adult hematopoietic stem cells", Nat Immunol 9 (7):810-819.
               </p>
               <p>
                Majewski, I. J., M. E. Ritchie, B. Phipson, J. Corbin, M. Pakusch, A. Ebert, M. Busslinger, H. Koseki, Y. Hu, G. K. Smyth, W. S. Alexander, D. J. Hilton, and M. E. Blewitt "Opposing roles of polycomb repressive complexes in hematopoietic stem and progenitor cells", Blood 116 (5):731-739.
                </p>
               <p>
                Watkins, Nicholas A., Arief Gusnanto, Bernard de Bono, Subhajyoti De, Diego Miranda-Saavedra, Debbie L. Hardie, Will G. J. Angenent, Antony P. Attwood, Peter D. Ellis, Wendy Erber, Nicola S. Foad, Stephen F. Garner, Clare M. Isacke, Jennifer Jolley, Kerstin Koch, Iain C. Macaulay, Sarah L. Morley, Augusto Rendon, Kate M. Rice, Niall Taylor, Daphne C. Thijssen-Timmer, Marloes R. Tijssen, C. Ellen van der Schoot, Lorenz Wernisch, Thilo Winzer, Frank Dudbridge, Christopher D. Buckley, Cordelia F. Langford, Sarah Teichmann, Berthold Gottgens, Willem H. Ouwehand, and Consortium on behalf of the Bloodomics (2009), "A HaemAtlas: characterizing gene expression in differentiated human blood cells", Blood 113 (19):e1-9.
               </p>
               <p>
               Novershtern N, Subramanian A, Lawton LN, Mak RH, Haining WN, et al. (2011), "Densely Interconnected Transcriptional Circuits Control Cell States in Human Hematopoiesis." Cell 144: 296-309.
               </p>
               
            </div>

        </div>
        <div class="sideColumn">
            ${Base.sideColumnBiologists()}  
            
        </div>
    </div>


      


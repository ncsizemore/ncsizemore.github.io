(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2503:(e,t,a)=>{Promise.resolve().then(a.bind(a,6809))},6809:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=a(5155),i=a(2115),s=a(6943),o=a(1203),r=a(5317);a(1491);let l=JSON.parse('{"deception":{"title":"Algorithmic lie detection","date":"2023-06-02","slug":"deception","status":"Manuscript in preparation.","abstract":"title: Algorithmic lie detection\\nauthor: \'\'\\nmath: yes\\ndate: \'2023-06-02\'\\nslug: deception\\ncategories: []\\ntags: []\\nbibliography: [tnet.bib]\\ncsl: science-advances.csl\\noutput:\\n  blogdown::html_page:\\n    number_sections: false\\n    toc: false","softwareLink":"[`truthnet`](https://github.com/zeroknowledgediscovery/truthnet)","bibliography":["tnet.bib"],"rawContent":"\\n**Status:** Manuscript in preparation.\\n\\n---\\n\\n## Abstract\\n\\n> Exaggerating or faking  the symptoms of a mental health disorder  can confound structured diagnostic interviews and hinder clinical psychiatric assessments [@Rogers1997; @rogers2008clinical].  We introduce an  artificial intelligence (AI) framework for detecting symptom fabrication in mental health assessments, illustrated here for Post-Traumatic Stress Disorder (PTSD) diagnoses, for which malingering is a known problem [@frueh2007us; @taylor2007detection], partially ascribable to the  potential for secondary financial gain from positive diagnoses.  Algorithm VeRITAS employs novel generative AI to infer statistical dependencies inherent in true response patterns, and flags  responses which violate these subtle  constraints.  With a study sample of $n=651$ patients, VeRITAS is estimated to have an Area Under the Curve (AUC) of $\\\\geq 0.95\\\\pm 0.02$, with  sensitivity $> 95\\\\%$, specificity $>88\\\\%$ respectively, and positive likelihood ratios between $9.9 - 19.77$ achievable based on the population prevalence of malingering in the context of PTSD diagnosis. We show that in our methodology having training in forensic psychiatry, or other relevant mental health experience, is not helpful in deceiving  the algorithm. Our tool   offers an  objective, disease-specific, fast (average time $\\\\leq 4$ min)  approach to detect fake  PTSD, and if adopted, can  ensure that healthcare resources and disability concessions reach  those genuinely in need,  while  helping to maintain  integrity of clinical data. Moreover, the ability to identify and help  patients who might be malingering due to other mental health conditions, poverty or   socio-economic compulsions can  improve general health outcomes  in disadvantaged communities.\\n\\n## Software\\n\\n[`truthnet`](https://github.com/zeroknowledgediscovery/truthnet): Python package for analysis of arbitrary response data using our approach\\n\\n---"},"microbiome":{"title":"Microbiome dynamics","date":"2023-06-02","slug":"microbiome","status":"This paper has been accepted and will appear in Science Advances. An older preprint is available [here](https://doi.org/10.21203/rs.3.rs-2406518/v1).","abstract":"title: Microbiome dynamics\\nauthor: \'\'\\nmath: yes\\ndate: \'2023-06-02\'\\nslug: microbiome\\ncategories: []\\ntags: []\\nbibliography: [qbiome.bib]\\ncsl: science-advances.csl\\noutput:\\n  blogdown::html_page:\\n    number_sections: false\\n    toc: false","softwareLink":"[`qbiome`](https://github.com/zeroknowledgediscovery/qbiome)","bibliography":["qbiome.bib"],"rawContent":"\\n**Status:** This paper has been accepted and will appear in Science Advances. An older preprint is available [here](https://doi.org/10.21203/rs.3.rs-2406518/v1).\\n\\n---\\n\\n## Abstract\\n\\n> Dysbiosis in the infant microbiome is linked to impaired cognitive development @carlson2018infant. Yet, patient-specific microbiome variations hinder the definition of normal ranges @lozupone2012diversity, making the microbial impact on neurodevelopment unclear. This study introduces a digital twin of the infant microbiome, forecasting ecosystem trajectories from initial observations. Using 16S rRNA profiles from $88$ preterm infants ($398$ fecal samples and $32,942$ abundance estimates for $91$ microbial classes), the model predicts abundance dynamics with $R^2=0.69$. It contrasts digital twins of typically and suboptimally developing infants to estimate individual risk of deviant microbiome growth. These deviations correlate with markers of developmental delays detected in the first $2$-$4$ weeks, categorizing infants by head circumference growth with $\\\\approx 76\\\\%$ AUC, $95\\\\%\\\\pm 1.8\\\\% $ PPV at $98\\\\%$ specificity at $30$ weeks postmenstrual age. Furthermore,early microbial interventions is suggested as possibly mitigating developmental risks for about $45.2\\\\%$ of the cohort, with potentially negative effects from incorrect supplantation profile. Broadly, this work reports  a novel generative AI  modelling a  dynamic microbial ecosystem.\\n\\n## Software\\n\\n[`qbiome`](https://github.com/zeroknowledgediscovery/qbiome): Python package for analysis of microbiome data using our approach\\n\\n---"},"ai-text":{"title":"Recognition of AI-generated text","date":"2023-06-02","slug":"ai-text","status":"Manuscript in preparation.","abstract":"title: Recognition of AI-generated text\\nauthor: \'\'\\nmath: yes\\ndate: \'2023-06-02\'\\nslug: ai-text\\ncategories: []\\ntags: []\\nbibliography: [nero.bib]\\ncsl: science-advances.csl\\noutput:\\n  blogdown::html_page:\\n    number_sections: false\\n    toc: false","softwareLink":"[`recogai`](https://github.com/zeroknowledgediscovery/recogai_)","bibliography":["nero.bib"],"rawContent":"\\n**Status:** Manuscript in preparation.\\n\\n---\\n\\n## Abstract\\n\\n> Recognizing AI generated text by estimating the entropy rate of the symbol stream over the 26+1 letter alphabet (English). We hypothesize that human generated content has a higher entropy rate. Shannon\'s experimental approach @shannon1951prediction suggested that English has an entropy rate of $1$ bit per letter; here we show that AI generated content typically has much less. We call this algorithm `NERO` - the Nonparametric Entropy-Rate Oracle.\\n\\nGenerative artificial intelligence (AI) through large language models (LLMs), continues to demonstrate remarkable capabilities in generating text that closely mimic human writing styles, and are increasingly becoming invaluable for a wide range of applications, from automated content creation to enhancing natural language processing tasks. Currently, the capabilities of LLMs have improved to the point where determining whether a text is human-generated no longer be trivial. @naturebe2023prepare This apparent indistinguishability of AI vs. human generated content has raised significant concerns regarding the reliability and authenticity of information in the public domain[@crothers2023machine; @thirunavukarasu2023large], and where the integrity of the information is critical, such as in academic writing, journalism, and legal documentation.\\n\\nWe posit that there exists a measurable difference in the inherent complexity and unpredictability of human vs AI generated text. A long-form text, when represented as a symbol stream over a $27$ letter alphabet ($26$ letter + space), may be viewed as a  sample path from an underlying  stochastic process, and a fundamental measure of the inherent complexity of such a stochastic  generator is the  entropy rate of the  process. Here we demonstrate that our intuition that AI-generated text is recognizably less complex, leads to a practically implementable algorithm, revealing that AI achieves significantly lower entropy rate compared to human content. This insight not only leads to a robust tool for recognizing AI generated long-form text, but emerges as the yard-stick by which to measure the quality of AI content-generation capability as LLMs continue to improve.\\n\\n## Software\\n\\n[`recogai`](https://github.com/zeroknowledgediscovery/recogai_): Source files for experiments on detection of AI-generated text using NERO algorithm (currently private)\\n\\n----"},"spectral":{"title":"Spectral estimators","date":"2023-06-02","slug":"spectral","status":"Investigating.","abstract":"title: Spectral estimators\\nauthor: \'\'\\nmath: yes\\ndate: \'2023-06-02\'\\nslug: spectral\\ncategories: []\\ntags: []\\nbibliography: [myBib.bib]\\ncsl: science-advances.csl\\nheader-includes: \\n  - \\\\usepackage{amsmath}\\noutput:\\n  blogdown::html_page:\\n    number_sections: false\\n    toc: false","softwareLink":"","bibliography":["myBib.bib"],"rawContent":"\\n**Status:** Investigating.\\n\\n---\\n\\nCan we develop provably optimal solution guarantees to nonconvex optimization problems under certain regimes?  An example problem instance is the well-known $\\\\mathbb{Z}/2$ quadratic program: $$ \\\\tag{1}\\n    \\\\max_{x \\\\in \\\\{-1,1\\\\}^n} x^T A x,$$ where $A \\\\succeq 0$ is typically assumed positive semidefinite.  With no domain restriction, the optimal $x$ is the leading eigenvector of $A$. By restricting to the Boolean cube, this becomes NP-hard (though it can be approximated using semidefinite programming relaxations and the sum-of-squares/Lasserre hierarchy; see eg. [@parrilo2003semidefinite; @lasserre2010moments; @dressler2018optimization]). This problem (sometimes called the little Grothendieck problem [@charikar2004maximizing; @bandeira2016approximating]) arises in various important settings, eg. \\\\textsc{Maxcut} on a graph @goemans1995improved, stochastic block models/community detection in network analysis @abbe2017community, and group synchonization problems (over $\\\\mathbb{Z}/2$).  \\n\\nIn $\\\\mathbb{Z}/2$ synchronization problems, we try to recover an unknown (Bernoulli) signal $x \\\\in \\\\{-1,1\\\\}^n$ given an observed matrix $A = xx^T + \\\\sigma W$, where $\\\\sigma >0$ is some noise level and $W = W^T$ is a symmetric random noise matrix (eg. a Wigner matrix with Gaussian entries).\\\\footnote{Here, we also say that $A$ is modeled as a noisy rank-one matrix; eg. as a (rank-one) spiked (Wigner) model.} Then (1) arises naturally in the sense that its solution is the maximum likelihood (or maximum a posteriori, in the Bayesian regime assuming a uniform prior on $x$) estimator for $x$, i.e. the solution to (1) maximizes the probability of recovering $x$ given our observation.  [@bandeira2017tightness; @bandeira2018random]\\n\\nThis also arises from looking at certain low-rank or spiked Bernoulli models in the context of cancer diagnosis. In particular, in the case of a random process generating Bernoulli observations,\\\\footnote{For example, thresholded gene expression levels in cancer patients.} the matrix $A$ arises as a sample covariance matrix. Again, (1) has a clear interpretation: we are performing a kind of PCA, but want our estimators to come from the observation space, the Boolean hypercube.\\n\\nThe general difficulty in solving (1) is that the discrete nature of the hypercube results in a (nonconvex) optimization landscape plagued with \\"spurious\\" local optima. However, under certain conditions the problem is empirically well-behaved.  Recently, @abbe2020entrywise have shown that the natural estimator $\\\\hat{x} = \\\\text{sign}(v)$, where $v$ is the leading eigenvector of $A$, exactly recovers $x$ (in the sense that $\\\\hat{x} = \\\\pm x$ with probability approaching $1$ as $n \\\\to \\\\infty$), provided that the noise $\\\\sigma$ is beneath a threshold.  This suggests that under the specified regime, we may have an exact solution to (1), albeit with high probability.  \\n\\nA natural question is to what extent this can translate into exact results for solving (1).  In other words, can we assume certain conditions on $A$ to make (1) tractable (even solvable in closed form)?  A reasonable conjecture along these lines is that if the observed $A$ has leading eigenvalue sufficiently well-separated from the rest of the spectrum, the above estimator $\\\\hat{x}$ solves (1) exactly with no spurious optima. Note that this is likely related to the famous BBP phase transition @baik2005phase in random matrix theory, which describes when a small perturbation  of a random noise (covariance) matrix is detectable based on outliers in its spectrum.  This kind of assumption is rather general and is naturally satisfied in many applications; in particular, whenever it is appropriate to use low-rank or spiked/planted models for $A$, we expect this to occur.\\\\footnote{Eg., if we have data from a small number of distinct types of patients.}  \\n\\nThis project fits into a broader recent theme (of general interest) that nonconvex problems are often quite benign under certain circumstances, which helps explain why simple methods and heuristics have often performed well in practice (see @chi2019nonconvex} for a recent survey along these lines).\\n\\n---"},"group-partitions":{"title":"Group partitions","date":"2023-06-02","slug":"group-partitions","status":"See our paper in [Advances in Group Theory and Applications](https://doi.org/10.32037/agta-2018-004).","abstract":"title: Group partitions\\nauthor: \'\'\\nmath: yes\\ndate: \'2023-06-02\'\\nslug: group-partitions\\ncategories: []\\ntags: []\\nbibliography: [myBib.bib]\\ncsl: science-advances.csl\\noutput:\\n  blogdown::html_page:\\n    number_sections: false\\n    toc: false","softwareLink":"","bibliography":["myBib.bib"],"rawContent":"\\n**Status:** See our paper in [Advances in Group Theory and Applications](https://doi.org/10.32037/agta-2018-004).\\n\\n---\\n\\nThe covering number $\\\\sigma(G)$ is the minimal number of subgroups needed to write $G$ as a union of its proper subgroups.  This is a classically studied invariant of $G$ that remains of interest today eg. [@swartz2016covering].  If we further require that the subgroups have trivial pairwise intersection, this defines the partition number $\\\\rho(G)$ (note: not all groups admit either a cover or partition by subgroups). \\n\\nInspired by some of the classical work deriving basic results regarding the covering number and the classification of finite partitionable groups [@miller1906groups; @suzuki1961finite; @zappa2003partitions], we studied the relationship between the covering and partition numbers based on the structure of $G$.  The main point of interest here is to make a stronger statement than the trivial estimate $\\\\sigma(G) \\\\leq \\\\rho(G)$.  \\n\\nThis is an example of a question of purely mathematical interest which nonetheless benefits from the use of computational methods.  As part of this work, I made extensive use of GAP [@GAP4], a specialized programming language focused on groups and discrete computational algebra. It is often very productive to use tools like this to expedite the process of making and verifying conjectures.  Here we obtained a few interesting results, such as: \\n\\n> If $G$ is a finite partitionable $p$-group and $|G| > p^3$, then $\\\\sigma(G) < \\\\rho(G)$.\\n\\nFollowing upon our work, Garonzi and Dias obtained a classification of finite groups for which $\\\\sigma(G) = \\\\rho(G)$. [@garonzi2019group] Further work in this area could take a few directions, such as explicit computation of $\\\\rho(G)$ for all classes of partitionable groups; but again, this is something that would benefit from use of computational tools.\\n\\n---"},"hlb-model":{"title":"HLB Model","date":"2021-02-23","slug":"hlb-model","status":"Manuscript in preparation. (Note that some of the details below are outdated - recently, our understanding of the key dynamics of HLB spread have evolved substantially, and this page will be updated to reflect that in the near future.)","abstract":"The spread of [huanglongbing](https://en.wikipedia.org/wiki/Citrus_greening_disease) (黃龍病) through the state of Florida was driven through a variety of (stochastic) processes whose influence was exerted on different spatial and temporal scales.  In generating a cohesive model capable of faithfully explicating spread over large regions, we have to confront the challenge of modeling on these different scales simultaneously.\\n\\nThere are also practical issues of maintaining model parsimony and a general desire for computational efficiency.  All of these factors have influenced our modeling decisions throughout development.  Here we a highlight a few of the implementation choices and design features of our model.\\n\\n*Note:* This page represents a work-in-progress. More details still to come.  However, some slides for a recent talk discussing this model are available [here](../slides/hlb/hlb.html).","softwareLink":"","bibliography":[],"rawContent":"\\n**Status:** Manuscript in preparation. (Note that some of the details below are outdated - recently, our understanding of the key dynamics of HLB spread have evolved substantially, and this page will be updated to reflect that in the near future.)\\n\\n---\\n\\n# Multi-scale Stochastic Spread of HLB\\n\\nThe spread of [huanglongbing](https://en.wikipedia.org/wiki/Citrus_greening_disease) (黃龍病) through the state of Florida was driven through a variety of (stochastic) processes whose influence was exerted on different spatial and temporal scales.  In generating a cohesive model capable of faithfully explicating spread over large regions, we have to confront the challenge of modeling on these different scales simultaneously.\\n\\nThere are also practical issues of maintaining model parsimony and a general desire for computational efficiency.  All of these factors have influenced our modeling decisions throughout development.  Here we a highlight a few of the implementation choices and design features of our model.\\n\\n*Note:* This page represents a work-in-progress. More details still to come.  However, some slides for a recent talk discussing this model are available [here](../slides/hlb/hlb.html).\\n\\n# Overview of Model\\n\\nTimeline of observed events:\\n\\n- Early 1998: Psyllids arrive to SW Florida (Palm Beach County) and begin dispersing along the urban corridor\\n- Early 1999: Psyllids continue dispersing urban corridor of SW Florida, reaching Homestead\\n- $\\\\leq$ 1999: Small number of *C*Las-positive plants arrive to Homestead\\n  - Psyllids acquire *C*Las in Homestead\\n- Early 2000s: Widespread, statewide dispersal of uninfected psyllids; heavy infestation of commercial groves\\n- 2005: First observation of *C*Las in Florida\\n- 2009: Visible symptoms of infection and large blocks of citrus removed from production statewide\\n\\n## Spatial structure\\n\\nOur assumed baseline spatial structure is a 0.25 $\\\\times$ 0.25 sq. mile grid overlaying the state.  This is broadly partitioned into three classes of grid cells: (i) urban/developed areas containing host material, eg. citrus or orange jasmine hedges (habitable for psyllids),[^urban] (ii) commercial citrus groves,[^cropscape] (iii) areas containing no suitable host material for psyllids.\\n\\nThe model allows parameters to be general functions $f(x,y)$ of grid location $(x,y)$, but for simplicity, we generally assume the parameters to only vary across the three types of cells described above.\\n\\n## Dispersal mechanisms\\n\\nThe model includes dispersal via several mechanisms, some of which we describe below.\\n\\n### Local Psyllid Movement\\n\\nLocal, short-range psyllid movement occurs naturally, both via flight and wind-assisted local migration. For this model, our primary interest in this local dispersal is to track the aggregate advance of the vector population and disease.  Since statewide vector population is in the billions, we opt to implement this short-range movement using convolution with a local dispersal kernel. This has the added advantage of allowing us to use an optimized library ([TensorFlow](https://www.tensorflow.org/)) to take advantage of GPU/hardware acceleration for the more \\"expensive\\" parts of the model.\\n\\n### Sales of Plants\\n\\nStatewide sales of infected/infested nursery stock in Homestead, FL appears to have played a role in establishment of both uninfected psyllid populations, and later, spread of infected psyllids. This form of transport allowed psyllids to rapidly traverse large distances.\\n\\nFor our implementation, we first fix a selection of $\\\\approx$ 200 retail stores from a historical sample of known locations.  We then model sales of plants from Homestead nurseries to these retail stores, and from these stores to individual consumers around the state.  The volume for these sales processes is assumed to be a function of the local population surrounding each store. For sales to individual consumers, we assume that the distribution of the final location of the plant is a decreasing function of distance to the store making the sale.[^customers]\\n\\n\\n### Truck Dispersal\\n\\nLarge quantities of citrus are transported from commercial groves to bulk processing (juicing) facilities.  Transport is via open trailers, from which psyllids can easily disperse en route.  This is another important dispersal mechanism implemented in our model.\\n\\nFor both practical and computational reasons, we aggregate the grid to a lower resolution and threshold to generate a smaller set of harvesting locations (from which trucks are assumed to depart). We then extract routes from harvesting locations to processing plants using [OpenStreetMap](https://www.openstreetmap.org/). [^osm]\\n\\nEach day, we determine active truck routes (based on a truck scheduled generated using citrus density), and sample these to generate dispersal locations. Here is an example:\\n\\nThe points represent locations that psyllids would disperse to from some truck on the given day.\\n\\n\\n[//]: # (![](/day0534.png) )\\n\\n\\n[^urban]: Historical data on the distribution of host material is unknown; thus we utilize a suitably chosen pseudo-random configuration overlaying known urban/developed regions.\\n[^cropscape]: Identified from [NASS Cropscape](https://nassgeodata.gmu.edu/CropScape/) historical data.\\n[^customers]: Customers may travel long distances after buying a plant, but this is not likely.\\n[^osm]: In particular, we use [OSRM](http://project-osrm.org/) via the [`R` interface](https://cran.r-project.org/web/packages/osrm/index.html)."}}');function c(){let[e,t]=(0,i.useState)({}),a=e=>{t(t=>({...t,[e]:!t[e]}))},c=e=>e.replace(/@(\w+)/g,"[$1]"),d=e=>e.replace(/\[\^(\w+)\]/g,"($1)"),h=e=>{let t=e.replace(/^---\n[\s\S]*?\n---\n/,""),a=t.match(/## Abstract\n>\s*([\s\S]*?)(?=\n##|$)/);if(a&&a[1])return{type:"Abstract",text:d(c(a[1].trim()))};let n=t.match(/\*\*Status:\*\*.*?\n\n([\s\S]*)/);return{type:"Content",text:d(c(n?n[1].trim():"No content available."))}},m=e=>{if(!e)return null;let t=e.match(/\[(.*?)\]\((.*?)\)/);return t?{text:t[1],url:t[2]}:null},p=e=>{let t=e.replace(/#{1,6}\s+/g,"");return(t=(t=(t=(t=(t=t.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1")).replace(/(\*\*|__)(.*?)\1/g,"$2")).replace(/(\*|_)(.*?)\1/g,"$2")).replace(/\$[^$]+\$/g,"")).replace(/^>\s*/gm,"")).replace(/\s+/g," ").trim()};return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Research"}),(0,n.jsx)("div",{className:"space-y-6",children:Object.entries(l).map(t=>{let[i,l]=t,c=h(l.rawContent),d=m(l.softwareLink),u=p(c.text);return(0,n.jsxs)("article",{className:"border border-gray-100 rounded-md",children:[(0,n.jsxs)("button",{onClick:()=>a(i),className:"w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50 transition-colors",children:[(0,n.jsx)("span",{className:"font-mono text-sm mt-0.5 text-gray-500",children:e[i]?"[−]":"[+]"}),(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("h3",{className:"text-base font-bold leading-snug mb-1",children:l.title}),!e[i]&&(0,n.jsxs)("p",{className:"text-sm text-gray-600 leading-relaxed",children:[u.slice(0,160),"..."]})]})]}),e[i]&&(0,n.jsxs)("div",{className:"px-4 pb-4 border-t border-gray-100",children:[(0,n.jsx)("div",{className:"mb-3 text-sm",children:(0,n.jsx)(s.o,{components:{strong:e=>{let{...t}=e;return(0,n.jsx)("span",{className:"font-semibold",...t})}},children:"**Status:** ".concat(l.status)})}),(0,n.jsx)("div",{className:"prose prose-sm max-w-none text-gray-600 mb-4",children:(0,n.jsx)(s.o,{remarkPlugins:[o.A],rehypePlugins:[r.A],components:{h1:e=>{let{...t}=e;return(0,n.jsx)("h1",{className:"text-base font-bold mt-6 mb-2",...t})},h2:e=>{let{...t}=e;return(0,n.jsx)("h2",{className:"text-base font-bold mt-4 mb-2",...t})},h3:e=>{let{...t}=e;return(0,n.jsx)("h3",{className:"text-sm font-bold mt-3 mb-1",...t})},p:e=>{let{...t}=e;return(0,n.jsx)("p",{className:"text-sm leading-relaxed my-2",...t})},ul:e=>{let{...t}=e;return(0,n.jsx)("ul",{className:"text-sm my-2 space-y-1 list-disc pl-4",...t})},li:e=>{let{...t}=e;return(0,n.jsx)("li",{className:"text-sm leading-relaxed",...t})},a:e=>{let{...t}=e;return(0,n.jsx)("a",{className:"text-blue-600 hover:text-blue-800 hover:underline",target:"_blank",rel:"noopener noreferrer",...t})}},children:c.text})}),d&&(0,n.jsx)("div",{className:"pt-3 border-t border-gray-100",children:(0,n.jsxs)("a",{href:d.url,className:"inline-block font-mono text-sm p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm",target:"_blank",rel:"noopener noreferrer",children:["[",d.text,"]"]})})]})]},i)})})]})}let d=JSON.parse('{"e":[{"title":"A digital twin of the infant microbiome to predict neurodevelopmental deficits","authors":["Sizemore, Nicholas","Oliphant, Kaitlyn","Zheng, Ruolin","Martin, Camilia R","Claud, Erika C","Chattopadhyay, Ishanu"],"journal":"Science Advances","volume":"10","number":"15","pages":"eadj0400","year":2024,"doi":"https://doi.org/10.1126/sciadv.adj0400","bibtex":"@article{sizemore2024digital,\\n  title={A digital twin of the infant microbiome to predict neurodevelopmental deficits},\\n  author={Sizemore, Nicholas and Oliphant, Kaitlyn and Zheng, Ruolin and Martin, Camilia R and Claud, Erika C and Chattopadhyay, Ishanu},\\n  journal={Science Advances},\\n  volume={10},\\n  number={15},\\n  pages={eadj0400},\\n  year={2024},\\n  publisher={American Association for the Advancement of Science}\\n}"},{"title":"Partition numbers of finite solvable groups","authors":["Foguel, Tuval","Sizemore, Nick"],"journal":"Advances in group theory and applications","volume":"6","pages":"55-67","year":2018,"doi":"https://doi.org/10.32037/agta-2018-004","bibtex":"@article{foguel2018partition,\\n  title={Partition numbers of finite solvable groups},\\n  author={Foguel, Tuval and Sizemore, Nick},\\n  journal={Advances in group theory and applications an open access journal},\\n  volume={6},\\n  pages={55--67},\\n  year={2018}\\n}"}]}');function h(){let[e,t]=(0,i.useState)(null),a=d.e,s=a=>{t(e===a?null:a)};return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold mb-6",children:"Publications"}),(0,n.jsx)("div",{className:"space-y-8",children:a.map((t,a)=>(0,n.jsxs)("article",{className:"space-y-2",children:[(0,n.jsx)("h3",{className:"text-base font-bold leading-snug",children:t.title}),(0,n.jsx)("div",{className:"text-sm text-gray-600",children:t.authors.join(", ")}),(0,n.jsxs)("div",{className:"text-sm",children:[(0,n.jsx)("span",{className:"italic",children:t.journal}),t.volume&&(0,n.jsxs)("span",{children:[", ",t.volume]}),t.number&&(0,n.jsxs)("span",{children:["(",t.number,")"]}),t.pages&&(0,n.jsxs)("span",{children:[", ",t.pages]}),t.year&&(0,n.jsxs)("span",{children:[", ",t.year]})]}),(0,n.jsxs)("div",{className:"space-x-3 font-mono text-xs",children:[t.doi&&(0,n.jsx)("a",{href:t.doi,className:"inline-block p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm",target:"_blank",rel:"noopener noreferrer",children:"[DOI]"}),t.bibtex&&(0,n.jsx)("button",{onClick:()=>s(a),className:"inline-block p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm font-mono",children:"[BibTeX]"})]}),e===a&&t.bibtex&&(0,n.jsx)("pre",{className:"mt-3 p-3 bg-gray-50 text-xs font-mono overflow-x-auto rounded border border-gray-100 whitespace-pre-wrap",children:t.bibtex})]},a))})]})}let m={notice:"Updated contact information coming soon."};function p(){return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-6",children:"Contact"}),(0,n.jsx)("div",{className:"text-sm space-y-4",children:m.notice?(0,n.jsx)("p",{className:"text-gray-600 italic",children:m.notice}):(0,n.jsxs)(n.Fragment,{children:[m.email&&(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"mailto:".concat(m.email),className:"font-mono text-sm hover:bg-gray-100 p-1 transition-colors",children:["[",m.email,"]"]})}),(m.department||m.institution||m.address)&&(0,n.jsxs)("div",{className:"space-y-1 text-gray-600",children:[m.department&&(0,n.jsx)("p",{children:m.department}),m.institution&&(0,n.jsx)("p",{children:m.institution}),m.address&&(0,n.jsx)("div",{className:"mt-2",children:m.address.map((e,t)=>(0,n.jsx)("p",{children:e},t))})]})]})})]})}let u=[{text:"Email",href:"mailto:nicholas.sizemore@example.com"},{text:"GitHub",href:"https://github.com/ncsizemore",external:!0},{text:"CV - PDF",href:"/resume.pdf",external:!0}];function g(){return(0,n.jsxs)("header",{className:"mb-12",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-4",children:"Nicholas Sizemore"}),(0,n.jsx)("p",{className:"text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl",children:"Computational biologist working at the intersection of network science and biological systems."}),(0,n.jsx)("div",{className:"space-x-3",children:u.map(e=>{let{text:t,href:a,external:i}=e;return(0,n.jsxs)("a",{href:a,className:"inline-block font-mono text-sm p-1.5 hover:bg-gray-50 border border-gray-100 rounded-sm",...i?{target:"_blank",rel:"noopener noreferrer"}:{},children:["[",t,"]"]},t)})})]})}function f(){return(0,n.jsx)("div",{className:"min-h-screen bg-slate-50",children:(0,n.jsx)("div",{className:"max-w-3xl mx-auto px-8 py-16",children:(0,n.jsxs)("div",{className:"bg-[#fdfbf7] rounded-2xl shadow-sm border border-gray-100/50 p-10",children:[(0,n.jsx)(g,{}),(0,n.jsxs)("main",{className:"space-y-12 [&>section]:first:border-t-0",children:[(0,n.jsx)(c,{}),(0,n.jsx)(h,{}),(0,n.jsx)(p,{})]})]})})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[562,330,923,441,517,358],()=>t(2503)),_N_E=e.O()}]);
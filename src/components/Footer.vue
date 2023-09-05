<template>
    <div id="app">   
            <div class="card ">
                <div class="row mb-4 ">
                    
                    <div class="col-md-4 col-sm-11 col-xs-11">
                        <div class="footer-text pull-left">
                             <div class="d-flex">
                                 <img src="@/assets/logo-alt.png" width="90px" alt="" >
                             </div>
                             <br>
                             <p class="card-text">Do not face queues, buy and sell online without headaches!</p>

                             <div class="social mt-2 mb-3">

                                <i class="fa fa-facebook-official fa-lg" ></i>
                                <i class="fa fa-instagram fa-lg"></i>
                                <i class="fa fa-twitter fa-lg"></i>
                                <i class="fa fa-linkedin-square fa-lg"></i>
                                <i class="fa fa-facebook"></i>

                             </div>
                         
                         </div>
                    </div>
                    
                    
                    <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
                    
                    <div class="col-md-2 col-sm-4 col-xs-4">
                 
                        <h5 class="heading"><i class='bx bxs-map'></i> Location:</h5>
                        <p>
                            Jeremias Fernandes de Castro streeth, <br>
                            Orizona, GO <br>
                            75280-000
                        </p>
                 
                    </div>
                 
                 
                    <div class="col-md col-sm-4 col-xs-4">
                 
                        <h5 class="heading"><i class='bx bxs-contact' ></i> Contact us:</h5>
                        <ul class="card-text">
                            <li><i class='bx bxl-facebook-square'></i> sugarbay</li>
                            <li><i class='bx bxl-instagram-alt' ></i> sugarbay_official</li>
                            <li><i class='bx bxl-linkedin-square' ></i> @sugarbay</li>
                            <li><i class='bx bx-envelope'></i> support@sugarbay.com</li>
                            <li><i class='bx bxs-phone'></i> +55 (62) 99867-6966 </li>
                        </ul>
                 
                    </div>

                </div>
                
                
                <div class="divider mb-4" >   
                </div>
    
               
                <div class="row" style="font-size:10px;">
                
                <div class="col-md-6 col-sm-6 col-xs-6">
                    
                    <div class="pull-left">
                        
                        <p><i class='bx bx-copyright' ></i> 2023 copyright</p>
                        
                    </div>
                    
                </div>
                
                

                <div class="col-md-6 col-sm-6 col-xs-6">
                   
                   
                    <div class="pull-right mr-4 d-flex policy">
                        
                       <div>Terms of Use</div>
                       <div>Privacy Policy</div>
                       <div>Cookie Policy</div>
                        
                    </div>
                    
                    
                    
                </div>
                 
                 
                 
             </div>
            </div>
            
        </div>
</template>
<script>
    export default {
        name: "FooterComponent",
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');
        #app {
            position: relative;
        }
        body{
            background-color:#f3f6fd ;
            font-size: 11.5px;
            font-weight: bold;
            color: rgb(189, 196, 203);
        }
        
        .card{
            padding: 2% 7%;
            color: #646771;
            background-color: var(--primary-color-light);
        }
        
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        
        ul >li{
            padding: 4px;
        }
        
        ul > li:hover{
            color:#957bda;
            cursor: pointer;
        }
        
        hr{
            border-width: 3px;
        }
        
        .social > i{
            padding: 1%;
            font-size: 15px;
        }
        
        .social > i:hover{
            color:#957bda;
            cursor:pointer;
        }
        
        .policy > div{
            padding: 4px;
        }
        
        .heading{
            font-family: 'Titillium Web', sans-serif;
            color: var(--text-color);
        }
        
        .divider{
            border-top: 2px solid rgba(189, 196, 203, 0.5);;
        }
        *{
            color: var(--text-color);
        }
</style>
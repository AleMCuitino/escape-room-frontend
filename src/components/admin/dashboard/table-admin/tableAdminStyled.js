import styled from "styled-components";

export const CssTableProvider = styled.div`

.table-striped>tbody>tr:nth-of-type(odd)>* {
    --bs-table-accent-bg: #CBBFE7;

 
}
.table-striped>tbody>tr:nth-of-type(even)>* {
    --bs-table-accent-bg: #EFECF8;
}

.table-striped > tbody tr:hover > *{
    --bs-table-accent-bg:#FFA37F;
}

.rooms{
    font-size: .9rem;

    div{

        min-height:38px;
        height: 100%;
    }
    
}

.hover-actions{
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%; 
    button{
        margin-right: 1rem;
        line-height: 0;
        height: auto;

        svg{
            max-width: 20px;
            height: auto;
             line-height: 0;
        }
    }


}


    
 .hover-actions button{

    background: white;
    box-shadow: 5px 5px 0 0 #00000026;
    border-radius: 0;
    padding: 0.5rem;
    border: none;
    font-size: .8rem; 
    :hover{
        background: #FF4700;
        color:white;
    }

 }   

 td.status{
    font-size: .8rem;
vertical-align: center;
 }


@media (min-width: 767px){
    .hover-actions{ display: none;}
    .rooms:hover .hover-actions{
        
        display:flex;
        
    }

    .status{
    width:20%;
  }

}


`
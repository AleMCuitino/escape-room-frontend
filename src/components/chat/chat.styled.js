import styled from 'styled-components'


export const ContainerChat = styled.div`

    width:100%;
    max-width:350px;
    padding:1rem;
    border-radius:15px;
    background-color:#33C8CE40;
    position:fixed;
    border: #33C8CE 2px solid;
    z-index: 99;
    align-self:flex-end;
    left: 0;
    
    .container_inputs{
        display: flex;
        width: 100%;
        justify-content: space-between;
        
        >input{
            color:#33C8CE;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #33C8CE;
            width: 70%;;
            &:focus{
                border: none;
                outline: none;
            }
        }
    }
    .container_messages{
        max-height: 200px;
        overflow-y: scroll;

        >p{
            text-align: left;
        }
        
    }
    .container_messages::-webkit-scrollbar {
        width: 12px;
    }

`
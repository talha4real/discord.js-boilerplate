const axios = require('axios');
module.exports = {
    
    name: 'key', // Command name (what's gonna be used to call the command)
    aliases: ['keys'], // Command aliases
  
    execute(client, message) {

      message.channel.send('Looking...').then(async (sentMsg) => {

        try{
            let key = message.content.split(' ');
            await axios.get(`https://api.hyper.co/v4/licenses/${key[1]}`,{
                headers:{
                    Authorization: `Bearer `
                }
            }).then(res=>{
                sentMsg.edit(
                    `Metadata: \`${
                        JSON.stringify(res.data.metadata)
                    }\``
                  );
                
            })
        }catch(e){
            sentMsg.edit(
                `Failed`
              );
        }
     

       
      });
    },
  };

  
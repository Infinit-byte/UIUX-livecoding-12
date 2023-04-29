import Card from 'react-bootstrap/Card';


function Avatar({profile, date, tweet, img, size}){
return(
<Card style={{ width: '18rem' }}>
      <Card.Body>
        <p>
            {profile}
            <img
                className="avatar"
                src={img}
                alt={'Photo of ' + profile}
                style={{
                  width: {size},
                  height: {size}
                }}
            />
        </p>
        <p>{date}</p>
        <Card.Text>
         {tweet}
        </Card.Text>
        </Card.Body>
    </Card>
    );
}

export default function Tweet(){
    return(
        <div>
            <Avatar
            profile={"whyman"}
            date ={"xx:yy:zzzz"}
            tweet = {"wowowowoowowowwo"}
            img = {"https://i.imgur.com/yXOvdOSs.jpg"}
            size = {90}
            />
        </div>

    );


}

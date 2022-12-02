import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AssignStaff from "./AssignStaff";
import CreateHub from "./CreateHub";
import { useRecoilValue } from "recoil";
import { userDecode } from "../../../Global/GlobalState";
import axios from "axios";

const url = "https://event-3p90.onrender.com";

interface iHub {

  _id?: string;
  name?: string;
  staff?: string;
  hubToken?: string;
}
interface iHubInfo {
  _id?: string;
  name?: string;
}

const Hub: React.FC = () => {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [toggleStaff, setToggleStaff] = useState(false);

  const user = useRecoilValue(userDecode);

  const [hubData, setHubData] = useState([] as iHub[]);
  const [getID, setGetID] = useState<string>("");
  const [name, setName] = useState<string>("");

  const getHub = async () => {
    const newURL = `${url}/api/hub/${user._id}/hubs`;
    await axios.get(newURL).then((res) => {
      setHubData(res.data.data.hub);
    });
  };

  useEffect(() => {
    getHub();
  }, []);

  const ToggleCreate = () => {
    setToggleCreate(!toggleCreate);
  };
  const ToggleStaff = () => {
    setToggleStaff(!toggleStaff);
  };

  return (
    <Container>
      <Wrapper>
        <HubsTitle>
          <h4>All Hubs</h4>
          <button onClick={ToggleCreate}>New Hub</button>
        </HubsTitle>

        <HubsCardCtrl>
          {hubData.map((props) => (
            <HubsCard key={props?._id!}>
              <HubName>{props.name}</HubName>
              <HubStaff>
                {" "}
                <strong style={{ marginRight: "5px" }}>Staff:</strong>{" "}
                {props.staff ? (
                  <div>{props.staff}</div>
                ) : (
                  <div style={{ fontSize: "12px", marginTop: "3px" }}>
                    No staff assigned yet!
                  </div>
                )}
              </HubStaff>
              <Space />
              <HubStaff>
                {" "}
                <strong style={{ marginRight: "5px" }}>Hub Token:</strong>{" "}
                {props.hubToken}
              </HubStaff>
              <br />
              <br />
              <button
                onClick={() => {
                  ToggleStaff();
                  setGetID(props._id!);
                  setName(props.name!);
                }}
              >
                View details
              </button>
            </HubsCard>
          ))}
        </HubsCardCtrl>
      </Wrapper>

      {toggleCreate ? <CreateHub ToggleCreate={ToggleCreate} /> : null}
      {toggleStaff ? (
        <AssignStaff ToggleStaff={ToggleStaff} getID={getID} name={name} />
      ) : null}
    </Container>
  );

};

export default Hub;
const Space = styled.div`
  margin-top: 5px;
`;
const Container = styled.div`
	/* width: 100%; */
	width: calc(100vw - 190px);
	min-height: calc(100vh - 60px);
	display: flex;
	justify-content: center;
	/* align-items: flex-end; */
	background-color: #f8f9fa;
	/* background-color: gold; */
	overflow: hidden;
	position: absolute;
	right: 0px;
	top: 50px;

	@media screen and (max-width: 1100px) {
		width: 95%;
	}
	@media screen and (max-width: 1005px) {
		width: 100%;
	}

	/* background-color: #352b1e; */
`;

const Wrapper = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	@media (max-width: 500px) {
		width: 90%;
	}
`;

const HubsTitle = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		height: 30px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: poppins;
		background-color: #087cc5;
		border: none;
		outline: none;
		color: #fff;
		font-weight: 600;
		border-radius: 4px;
		transition: all 350ms;
		cursor: pointer;
		:hover {
			transform: scale(0.94);
		}
	}
`;

const HubsCardCtrl = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const HubsCard = styled.div`
	height: 200px;
	width: 220px;
	background-color: aliceblue;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

	button {
		height: 30px;
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: poppins;
		background-color: #087cc5;
		border: none;
		outline: none;
		color: #fff;
		font-weight: 600;
		border-radius: 4px;
		transition: all 350ms;
		cursor: pointer;
		:hover {
			transform: scale(0.94);
		}
	}
`;
const HubName = styled.div`
	font-weight: 800;
	font-size: 24px;
	margin-bottom: 10px;
`;
const HubStaff = styled.div`
  display: flex;
  align-items: center;
`;

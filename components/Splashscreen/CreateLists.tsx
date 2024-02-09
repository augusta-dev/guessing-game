"use client";
import ListContext from "../Contexts/ListContext";
import React, { useContext, ReactNode, useEffect } from "react";
import getServerSideProps from "./getServerSideProps";
const CreateLists: React.FC<{}> = (props) => {
	const listCtx = useContext(ListContext);

	const [data, setData] = React.useState<string[]>([]);
	interface Datum {
		full: string;
	}
	const getData = async () => {
		const data = await getServerSideProps();
		//setData(data);
		const dataList: string[] = [];
		data.map((datum: Datum) => {
			dataList.push(datum.full);
		});
		setData(dataList);
	};
	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		listCtx.setFull(data);
		console.log(data);
	}, [data]);

	if (data.length > 0) {
		return <></>;
	}
};
export default CreateLists;

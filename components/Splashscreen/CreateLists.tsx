"use client";
import ListContext from "../Contexts/ListContext";
import React, { useContext, useEffect } from "react";
import getServerSideProps from "./getServerSideProps";
const CreateLists: React.FC = () => {
	const listCtx = useContext(ListContext);

	const [data, setData] = React.useState<string[]>([]);
	const [fullData, setFullData] = React.useState<any>({});

	interface Datum {
		full: string;
	}
	const getData = async () => {
		const data = await getServerSideProps();
		setFullData(data);
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
		const number = listCtx.index;
		console.log(number, fullData);
		if (fullData.length > 0) {
			listCtx.setCharacters(fullData[number].characters);
			listCtx.setImages(fullData[number].images);
			listCtx.setName(fullData[number].name);
			console.log(listCtx.name, listCtx.images, listCtx.characters);
		}
	}, [listCtx.index]);

	useEffect(() => {
		listCtx.setFull(data);
		console.log(data);
	}, [data]);

	if (data.length > 0) {
		return <></>;
	}
};
export default CreateLists;

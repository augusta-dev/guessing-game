import React from "react";
import AdminPage from "@/components/Admin/AdminPage";
import SeriesProvider from "@/components/Contexts/SeriesProvider";
export default function admin() {
	return (
		<SeriesProvider>
			<AdminPage />
		</SeriesProvider>
	);
}

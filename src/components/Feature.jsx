import React, { useState, useEffect } from "react";
import "./Feature.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { checkControl, checkFeature } from "../Helpers/helpers";

const Feature = ({ name, dev, devOut }) => {
	const [checkHeader, setCheckHeader] = useState("icon");

	useEffect(() => {
		const x = checkControl(dev.x, devOut.x).message;
		const y = checkControl(dev.y, devOut.y).message;
		const z = checkControl(dev.z, devOut.z).message;

		if (x === "error" || y === "error" || z === "error") {
			setCheckHeader("error");
		} else if (x === "warning" || y === "warning" || z === "warning") {
			setCheckHeader("warning");
		} else if (x === "success" || y === "success" || z === "success") {
			setCheckHeader("success");
		}
	}, [name, dev, devOut]);

	return (
		<div>
			<div className={`header ${checkHeader}`}>
				<div className="header__title">
					<p className="header__icon">
						<FontAwesomeIcon icon={faCircleNotch} />
					</p>
					<p>{name}</p>
				</div>
				<div className="header__right">
					<p className="header__iconRight">
						{checkFeature(checkHeader)}
					</p>
				</div>
			</div>
			<table className="table">
				<thead className="table__head">
					<tr>
						<th scope="col">Control</th>
						<th scope="col">Dev</th>
						<th scope="col">Dev out Tol</th>
					</tr>
				</thead>
				<tbody className="table__body">
					<tr>
						<td>X</td>
						<td>{dev.x}</td>
						<td>{devOut.x}</td>
						<td>{checkControl(dev.x, devOut.x).icon}</td>
					</tr>
					<tr>
						<td>Y</td>
						<td>{dev.y}</td>
						<td>{devOut.y}</td>
						<td>{checkControl(dev.y, devOut.y).icon}</td>
					</tr>
					<tr>
						<td>Z</td>
						<td>{dev.z}</td>
						<td>{devOut.z}</td>
						<td>{checkControl(dev.z, devOut.z).icon}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Feature;

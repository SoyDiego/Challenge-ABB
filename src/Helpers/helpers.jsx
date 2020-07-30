import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheckCircle,
	faExclamationCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export const checkControl = (dev, devOut) => {
	const outOfMeasureMore50Percent = (devOut * 100) / dev > 50;
	const outOfMeasureBetween31_49Percent =
		(devOut * 100) / dev >= 30 && (devOut * 100) / dev <= 50;

	if (outOfMeasureMore50Percent) {
		return {
			icon: <FontAwesomeIcon icon={faTimesCircle} color="#F02F40" />,
			message: "error",
		};
	} else if (outOfMeasureBetween31_49Percent) {
		return {
			icon: (
				<FontAwesomeIcon icon={faExclamationCircle} color="#E9C704" />
			),
			message: "warning",
		};
	} else {
		return {
			icon: <FontAwesomeIcon icon={faCheckCircle} color="#329A5D" />,
			message: "success",
		};
	}
};

export const checkFeature = (message) => {
	if (message === "error") {
		return <FontAwesomeIcon icon={faTimesCircle} />;
	} else if (message === "warning") {
		return <FontAwesomeIcon icon={faExclamationCircle} />;
	} else if (message === "success") {
		return <FontAwesomeIcon icon={faCheckCircle} />;
	}
};

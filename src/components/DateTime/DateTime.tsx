import React, { Fragment } from "react";
import moment from "moment";

type DateTimeType = {
  date?: string;
  time?: string;
  format?: string;
};
function DateTime(props: DateTimeType) {
  const { date, time, format = "MMM DD YYYY, h:mm a" } = props;
  let d = new Date();
  if (date) {
    d = new Date(date);
  }
  if (time) {
    d = new Date(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${time}`);
  }
  const timestamp = d.getTime();
  return <Fragment>{moment(timestamp).format(format)}</Fragment>;
}

export default DateTime;

#!/bin/bash

GENERIC_ERROR_MESSAGE="Please check previous step for errors"

# Check for generic issues
if test $RESULT -eq 1; then
    echo $GENERIC_ERROR_MESSAGE
    exit 1
fi

# Check for serverless errors with the deployment step
if test -f "$1"; then
    echo "checking $1 for errors."
    if cat $1 | grep -i "error:"; then
	echo $GENERIC_ERROR_MESSAGE
	exit 1
    fi
else
    echo "Please provide a correct log file if you want to check it for errors."
    exit 1
fi

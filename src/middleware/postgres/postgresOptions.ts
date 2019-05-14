import monitor from 'pg-monitor'

const postgresOptions = {
    capSQL: true,
    error(err:Error, e:any) {
        monitor.error(err, e);
    }
}
monitor.attach(postgresOptions)

export default postgresOptions;